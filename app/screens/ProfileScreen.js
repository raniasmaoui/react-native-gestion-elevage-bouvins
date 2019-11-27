import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
class ProfileScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {firstName: '', lastName: '', email: '', adress: '', phoneNumber: 1},
      ],
      id_user: '',
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
    fetch('https://parseapi.back4app.com/users/me', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-Parse-Application-Id': 'EEQ7Sp5CfmXlMZtLet88r41WjbBlbicd7ctsowZN',
        'X-Parse-REST-API-Key': 'JyaAKzthxhSNJQFj7hg9S0cXC8xFrptGfUrKi8ir',
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
        });
        console.log(res);
      });
  };
  render() {
    const data = this.state.data;
    return (
      
    <View></View>
    );
  }
}
export default ProfileScreen;
