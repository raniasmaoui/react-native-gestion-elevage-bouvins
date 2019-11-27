import React, {Component} from 'react';
import {FlatList, View, StyleSheet, Button} from 'react-native';
import AnimalsItem from './AnimalsItem';
import AsyncStorage from '@react-native-community/async-storage';
class Animals extends Component {
  constructor() {
    super();
    this.state = {
      data: [{name: ''}],
    };
    this.getData();
  }
  getData = () => {
    AsyncStorage.getItem('iduser').then(value => {
      AsyncStorage.getItem('id').then(val => {
        let iduser = value;
        let id = val;
        fetch(
          'https://parseapi.back4app.com/classes/Animal?where=%7B%20%22user%22%3A%20%7B%20%22__type%22%3A%20%22Pointer%22%2C%20%22className%22%3A%20%22_User%22%2C%20%22objectId%22%3A%20%22' +
            iduser +
            '%22%20%7D%2C%20%22group%22%3A%20%7B%20%22__type%22%3A%20%22Pointer%22%2C%20%22className%22%3A%20%22Group%22%2C%20%22objectId%22%3A%20%22' +
            id +
            '%22%20%7D%20%7D',
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'X-Parse-Application-Id':
                'EEQ7Sp5CfmXlMZtLet88r41WjbBlbicd7ctsowZN',
              'X-Parse-REST-API-Key':
                'JyaAKzthxhSNJQFj7hg9S0cXC8xFrptGfUrKi8ir',
            },
          },
        )
          .then(res => res.json())
          .then(res => {
            this.setState({
              data: res.results,
            });
            console.log(res);
          });
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
            renderItem={({item}) => <AnimalsItem animal={item} />}
          />
        </View>
        <View style={styles.but}>
          <View style={styles.hk}>
            <Button onPress={() => navigate('Food')} title="Food" />
          </View>
          <View style={styles.hk}>
            <Button
              onPress={() => navigate('CreateAnimal')}
              title="Create Animal"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  but: {
    flexDirection: 'row',
  },
  hk: {
    flex: 1,
  },
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
export default Animals;
