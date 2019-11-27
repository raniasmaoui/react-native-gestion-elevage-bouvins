import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Card, CardItem} from '../common';
class Food extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
    this.getData();
  }
  getData = () => {
    AsyncStorage.getItem('id').then(val => {
      let id = val;
      fetch(
        'https://parseapi.back4app.com/classes/Food?where=%7B%20%22group%22%3A%20%7B%20%22__type%22%3A%20%22Pointer%22%2C%20%22className%22%3A%20%22Group%22%2C%20%22objectId%22%3A%20%22' +
          id +
          '%22%20%7D%20%7D',
        {
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
        .then(data => {
          this.setState({
            data: data.results[0],
          });
        });
    });
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Image
          source={require('../assets/menuIcons/mng.jpg')}
          style={styles.image}
        />
        <Card>
          <CardItem>
            <Text>Description : </Text>
            <Text>{this.state.data.description}</Text>
          </CardItem>

          <CardItem>
            <Text>Frequency : </Text>
            <Text>{this.state.data.frequency}</Text>
          </CardItem>
          <CardItem>
            <Text>Unit : </Text>
            <Text>{this.state.data.unit}</Text>
          </CardItem>
        </Card>
        <Button onPress={() => navigate('UpdateFood')} title="Update" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fp: {
    color: 'red',
    fontSize: 28,
  },
  viewg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  t: {
    flex: 3,
  },
  text: {
    flex: 1,
    color: 'green',
    fontSize: 28,
    borderColor: 'rgba(255,255,255, .7)',
    borderWidth: 2,
    fontWeight: 'bold',
    padding: 40,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'rgba(255,255,255, .1)',
    /*color: 'green',
    fontWeight: 'bold',
    fontSize: 30,*/
  },
  image: {
    //flex:1
    height: 200,
    width: 200,
    marginTop: 50,
    marginLeft: 90,
    marginRight: 90,
  },
  view: {
    width: '80%',
    height: '80%',
    backgroundColor: 'rgba(255,255,255, .7)',
  },
  button: {
    color: 'green',
    padding: 10,
    margin: 15,
    height: 40,
  },
  textInput: {
    margin: 15,
    height: 40,
    width: '90%',
    borderColor: '#363636',
    borderWidth: 1,
    marginTop: 8,
  },
});
export default Food;
