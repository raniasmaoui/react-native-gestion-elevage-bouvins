import React, {Component} from 'React';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Animals from './Animals';
import AsyncStorage from '@react-native-community/async-storage';
import {withNavigation} from 'react-navigation';
//import UpdateGroup from '../screens/UpdateGroup';
class AnimalsGroupsItem extends Component {
  delete(id) {
    //const {navigation} = this.props;
    //const {navigate} = this.props.navigation;
    console.log(id.toString());
    fetch('https://parseapi.back4app.com/classes/Group/' + id.toString(), {
      method: 'DELETE',
      headers: {
        'X-Parse-Application-Id': 'EEQ7Sp5CfmXlMZtLet88r41WjbBlbicd7ctsowZN',
        'X-Parse-REST-API-Key': 'JyaAKzthxhSNJQFj7hg9S0cXC8xFrptGfUrKi8ir',
      },
      //  body: JSON.stringify({OBJECT_ID:'wtevXkKVAR'})
    })
      .then(response => response.json())
      .then(response => {
        this.props.navigation.push('AnimalsGroups');
        //() => this.props.navigation.navigate('AnimalsGroups');
        //navigate('AnimalsGroups');
        //() => this.props.navigation.navigate('Home');
        //navigate('AnimalsGroups');
        //this.props.navigation.navigate('AnimalsGroups'),
        //navigate('AnimalsGroups'),
        //Alert.alert('ok' + response);
      });
  }
  update(id) {
    //const {navigate} = this.props.navigation;
    console.log(id);
    fetch('https://parseapi.back4app.com/classes/Group/' + id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': 'EEQ7Sp5CfmXlMZtLet88r41WjbBlbicd7ctsowZN',
        'X-Parse-REST-API-Key': 'JyaAKzthxhSNJQFj7hg9S0cXC8xFrptGfUrKi8ir',
      },
      body: JSON.stringify({
        name: 'groupe',
        description: 'groupe',
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        this.props.navigation.push('AnimalsGroups');
        // navigate('AnimalsGroups');
      });
  }

  _storeData = async id => {
    try {
      await AsyncStorage.setItem('id', id);
    } catch (error) {
      // Error saving data
    }
    console.log(id);
    this.props.navigation.push('Animals');
  };

  render() {
    const groupe = this.props.groupe;
    return (
      <TouchableOpacity onPress={() => this._storeData(groupe.objectId)}>
        <View style={styles.main_container}>
          <Image
            style={styles.image}
            source={{
              uri: 'http://cdn.brownfieldagnews.com/wp-content/uploads/2015/04/Wisconsin-cows.png',
            }}
          />
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              <Text style={styles.title_text}>{groupe.name}</Text>
            </View>

            <View style={styles.description_container}>
              <Text style={styles.description_text} numberOfLines={6}>
                {groupe.description}
              </Text>
            </View>

            <View style={styles.date_container}>
              <Button
                onPress={() => this.update(groupe.objectId)}
                title="Update"
                color="blue"
                //idgroup={groupe.objectId}
                //accessibilityLabel="Learn more about this purple button"
              />
              <Button
                onPress={() => this.delete(groupe.objectId)}
                title="Delete"
                color="red"
                //accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray',
  },
  content_container: {
    flex: 1,
    margin: 2, //5,
    backgroundColor: '#DCDCDC',
  },
  header_container: {
    flex: 3,
    flexDirection: 'row',
  },

  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'blue',
  },
  description_container: {
    flex: 7,
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
  },
  date_container: {
    flex: 2,
    flexDirection: 'row-reverse',
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14,
  },
});
export default withNavigation(AnimalsGroupsItem);
//export default AnimalsGroupsItem;
