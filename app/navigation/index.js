import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
//import React, {Component} from 'react';
//import {HomeScreen, ProfileScreen} from '../screens';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AnimalsGroups from '../screens/AnimalsGroups';
import CreateGroup from '../screens/CreateGroup';
import VeterinaryScreen from '../screens/VeterinaryScreen';
import MyVeterinaryScreen from '../screens/MyVeterinaryScreen';
import ListVeterinaryScreen from '../screens/ListVeterinaryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WorkersScreen from '../screens/WorkersScreen';
import WeatherScreen from '../screens/WeatherScreen';
import HealthScreen from '../screens/HealthScreen';
import AnimalsGroupsItem from '../screens/AnimalsGroupsItem';
import Animals from '../screens/Animals';
import CreateAnimal from '../screens/CreateAnimal';
import Food from '../screens/Food';
import UpdateFood from '../screens/UpdateFood';
//import test from '../screens/test';
const MainNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: HomeScreen,
  },
  CreateGroup: {screen: CreateGroup},
  //test: {screen: test},
  SignUp: {screen: SignUpScreen},
  ForgotPassword: {screen: ForgotPasswordScreen},
  AnimalsGroups: {screen: AnimalsGroups},
  Veterinary: {screen: VeterinaryScreen},
  MyVeterinary: {screen: MyVeterinaryScreen},
  ListVeterinary: {screen: ListVeterinaryScreen},
  Profile: {screen: ProfileScreen},
  Workers: {screen: WorkersScreen},
  Weather: {screen: WeatherScreen},
  Health: {screen: HealthScreen},
  AnimalsGroupsItem: {screen: AnimalsGroupsItem},
  Animals: {screen: Animals},
  CreateAnimal: {screen: CreateAnimal},
  Food: {screen: Food},
  UpdateFood: {screen: UpdateFood},
});
const Root = createAppContainer(MainNavigator);

export default Root;
