import React, {Component} from 'react';
import {FlatList, View, StyleSheet, Button} from 'react-native';
import AnimalsGroupsItem from './AnimalsGroupsItem';
import AsyncStorage from '@react-native-community/async-storage';
class AnimalsGroups extends Component {
  constructor() {
    super();
    this.state = {
      data: [{name: ''}],
    };
    this.getData();
  }

  getData = () => {
    AsyncStorage.getItem('sessionToken')
      .then(result => {
        this.setState({
          id_user: result,
        });
      })
      .done();
    /*
    const url = JSON.stringify(
      'https://parseapi.back4app.com/classes/Group?where= "{  "group":{ "__type": "Pointer", "className": "_User", "objectId":' +
        +this.state.id_user +
        ' } }',
    );
    */

    //const url="https://parseapi.back4app.com/classes/Group?where=\"{  \"group\":{ \"__type\": \"Pointer\", \"className\": \"_User\", \"objectId\": \"S0ehSqgftA\" } }\"";

    console.log(AsyncStorage.getItem('iduser').toString());
    AsyncStorage.getItem('iduser').then(value => {
      let iduser = value;

      // Call WS
      // S0ehSqgftA

      console.log(iduser);

      fetch(
        // url,
        'https://parseapi.back4app.com/classes/Group?where=%22%7B%20%20%5C%22group%5C%22%3A%7B%20%5C%22__type%5C%22%3A%20%5C%22Pointer%5C%22%2C%20%5C%22className%5C%22%3A%20%5C%22_User%5C%22%2C%20%5C%22objectId%5C%22%3A%20%5C%22' +
          iduser +
          '%5C%22%20%7D%20%7D%22',
        /*
   %7B%20%22group%22%3A%20%7B%20%22__type%22%3A%20%22Pointer%22%2C%20%22className%22%3A%20%22_User%22%2C%20%22objectId%22%3A%20%22' +
     'S0ehSqgftA' + '%22%20%7D%20%7D'*/ {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'X-Parse-Application-Id':
              'EEQ7Sp5CfmXlMZtLet88r41WjbBlbicd7ctsowZN',
            'X-Parse-REST-API-Key': 'JyaAKzthxhSNJQFj7hg9S0cXC8xFrptGfUrKi8ir',
          },
        },
      )
        .then(res => res.json())
        /*.then(res =>
     { res.json();
     console.log(res);
  //  console.log(res.json);
   })*/
        .then(res => {
          this.setState({
            data: res.results,
          });

          console.log(res);
        });
    });
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.flat}>
          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <AnimalsGroupsItem groupe={item} />}
          />
        </View>
        <View>
          <Button
            onPress={() => navigate('CreateGroup')}
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
export default AnimalsGroups;
