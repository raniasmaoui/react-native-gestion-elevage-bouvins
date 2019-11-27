import React, {Component} from 'react';
import {Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
class test extends Component {
  fct() {
    AsyncStorage.getItem('sessionToken').then(value => {
      if (value !== null) {
        console.log(value);
      }
    });
  }
  render() {
    return <Button title="ok" onPress={() => this.fct()} />;
  }
}

export default test;
