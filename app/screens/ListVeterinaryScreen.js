import React, {Component} from 'react';
import {FlatList, View, StyleSheet, Button} from 'react-native';
import AnimalsGroupsItem from './AnimalsGroupsItem';
import AsyncStorage from '@react-native-community/async-storage';

class ListVeterinaryScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: [{objectId: 1, Nom: '', Description: '', createdAt: ''}],
    };
    this.getData();
  }
  getData = () => {
    let session;
    AsyncStorage.getItem('sessionToken').then(value => {
      if (value !== null) {
        session = value;
      }
    });
    const test =
      '%7B%20%22group%22%3A%20%7B%20%22__type%22%3A%20%22Pointer%22%2C%20%22className%22%3A%20%22_User%22%2C%20%22objectId%22%3A%20%22S0ehSqgftA%22%20%7D%20%7D';
    // ?where="{  \"group\":{ \"__type\": \"Pointer\", \"className\": \"_User\", \"objectId\": \"S0ehSqgftA\" } }"
    /*const user =
      '?where="{  \\"group\\":{ \\"__type\\": \\"Pointer\\", \\"className\\": \\"_User\\", \\"objectId\\": \\"' +
      AsyncStorage.getItem('sessionToken').value +
      '\\" } }"';*/
    fetch(
      'https://parseapi.back4app.com/classes/Group?where=' + test,
      // 'https://parseapi.back4app.com/classes/Group', //?where="{  \\"group\\":{ \\"__type\\": \\"Pointer\\", \\"className\\": \\"_User\\", \\"objectId\\": \\"S0ehSqgftA\\" } }"'
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-Parse-Application-Id': 'EEQ7Sp5CfmXlMZtLet88r41WjbBlbicd7ctsowZN',
          'X-Parse-REST-API-Key': 'JyaAKzthxhSNJQFj7hg9S0cXC8xFrptGfUrKi8ir',
        },
      },
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
        });
        console.log(test);
        console.log(res);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flat}>
          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            // keyExtractor={item => item.objectId}
            renderItem={({item}) => <AnimalsGroupsItem groupe={item} />}
          />
        </View>
        <View>
          <Button
            onPress={() => this.props.navigation.navigate('CreateGroup')}
            title="Create Group"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flat: {
    flex: 3,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, .4)',
  },
  top: {
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#fff',
    fontSize: 28,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'rgba(255,255,255, .1)',
  },
  menuContainer: {
    height: '50%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default ListVeterinaryScreen;
