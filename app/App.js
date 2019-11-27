/*import {createStackNavigator} from 'react-navigation-stack';
import * as React from 'react';
import {createAppContainer} from 'react-navigation';
//import {HomeScreen, ProfileScreen} from '../screens';
import LoginScreen from './screens/LoginScreen';

const MainNavigator = createStackNavigator({
  LoginScreen: LoginScreen,
});
const App = createAppContainer(MainNavigator);*/

//export default App;
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Root from './navigation';
//import LoginScreen from './screens/LoginScreen';
export default class App extends React.Component {
  render() {
    return <Root />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
