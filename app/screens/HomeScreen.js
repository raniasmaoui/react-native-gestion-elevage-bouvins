import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Button,
} from 'react-native';
//import { SearchBar } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import MenuItem from '../components/MenuItem';
class HomeScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
     /* <ImageBackground
        source={require('../assets/menu.jpg')}
        style={styles.container}>*/
      <View style={styles.container}>
        <View style={styles.overlayContainer}>
          <View style={styles.top}>
            <View style={styles.menuContainer}>
              <MenuItem
                itemImage={require('../assets/menuIcons/cow.png')}
                onPressButton={() => navigate('AnimalsGroups')}
                BtnTitle="Cows"
              />
              <MenuItem
                itemImage={require('../assets/menuIcons/heart.png')}
                onPressButton={() => navigate('Health')}
                BtnTitle="Health"
              />
              <MenuItem
                itemImage={require('../assets/menuIcons/doctor.png')}
                onPressButton={() => navigate('Veterinary')}
                BtnTitle="Veterinary"
              />
              <MenuItem
                itemImage={require('../assets/menuIcons/group.png')}
                onPressButton={() => navigate('Workers')}
                BtnTitle="Workers"
              />
              <MenuItem
                itemImage={require('../assets/menuIcons/user.png')}
                onPressButton={() => navigate('Profile')}
                BtnTitle="Profile"
              />
              <MenuItem
                itemImage={require('../assets/menuIcons/warm.png')}
                onPressButton={() => navigate('Weather')}
                BtnTitle="Weather"
              />
            </View>
          </View>
        </View>
      </View> //</ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, .4)', //47,163,218
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
    height: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textinput: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
    color: '#000000',
    backgroundColor: '#fff',
    fontSize: 30,
  },
});
export default HomeScreen;
