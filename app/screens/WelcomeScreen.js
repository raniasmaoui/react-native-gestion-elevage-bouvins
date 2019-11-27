import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Button1 from '../components/Button1';
//import AwesomeButton from 'react-native-really-awesome-button';
class WelcomeScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.image_back}>
        <View style={styles.view}>
          <View style={styles.view3} />
          <View style={styles.view1}>
            <Image
              source={require('../assets/menuIcons/cow.png')}
              style={styles.image}
            />
            <Text style={styles.text}>WELCOME</Text>
          </View>
          <View style={styles.view2}>
            <Button1 onPress={() => navigate('Login')} style={styles.button}>
              LOGIN
            </Button1>
            <Button1 onPress={() => navigate('SignUp')}>SIGN UP</Button1>
          </View>
          <View style={styles.view3} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image_back: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    flex: 2,
  },
  view1: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 1,
  },
  view2: {
    flex: 2,
  },
  image: {
    //flex:1
    height: 300,
    width: 300,
  },
  button: {
    height: 300,
    width: 50,
  },
  text: {
    color: 'rgb(42, 55, 68)',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
  },
});
export default WelcomeScreen;
