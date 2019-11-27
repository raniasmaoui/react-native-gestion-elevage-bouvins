import React, {Component} from 'react';
import {
  View,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Input from '../components/Input';
import Button1 from '../components/Button1';
import AsyncStorage from '@react-native-community/async-storage';
import {Card, CardItem} from '../common';
class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }
  sessionToken = '';
  save_sessionToken = async sessionToken => {
    try {
      await AsyncStorage.setItem('sessionToken', sessionToken);
    } catch (error) {
      console.log(error.message);
    }
  };
  get_sessionToken = async () => {
    let sessionToken = '';
    try {
      //const sessionToken = await AsyncStorage.getItem('sessionToken');
      sessionToken = (await AsyncStorage.getItem('@sessionToken')) || 'none';
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
    return sessionToken;
  };
  delete_sessionToken = async () => {
    try {
      await AsyncStorage.removeItem('sessionToken');
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  };
  _onLoginPressed() {
    const auth =
      '?username=' +
      this.state.username +
      '&' +
      'password=' +
      this.state.password;
    const {navigate} = this.props.navigation;
    fetch('https://parseapi.back4app.com/login' + auth, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-Parse-Revocable-Session': 1,
        'X-Parse-Application-Id': 'EEQ7Sp5CfmXlMZtLet88r41WjbBlbicd7ctsowZN',
        'X-Parse-REST-API-Key': 'JyaAKzthxhSNJQFj7hg9S0cXC8xFrptGfUrKi8ir',
      },
    })
      .then(response => response.json())
      .then(data => {
        this.sessionToken = data.objectId;
        console.log('ggg');
        this.save_sessionToken(this.sessionToken);
        if (data.emailVerified) {
          AsyncStorage.getItem('sessionToken').then(value => {
            if (value !== null) {
              console.log(value);
              AsyncStorage.setItem('iduser', value);
            }
          });
          //console.log(this.sessionToken);
          //const val = this.get_sessionToken();
          //console.log(val);
          //navigate('test');
          navigate('Home');
        } else {
          Alert.alert('verifier votre mail');
        }
      })
      .catch(error => Alert.alert(error));
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Image
          source={require('../assets/menuIcons/user.png')}
          style={styles.image}
        />
        <Card>
          <CardItem>
            <Input
              label="Username :"
              placeholder="Enter your username"
              secureTextEntry={false}
              onChangeText={text => this.setState({username: text})}
            />
          </CardItem>

          <CardItem>
            <Input
              label="Password :"
              placeholder="Enter your Password"
              secureTextEntry
              onChangeText={text => this.setState({password: text})}
            />
          </CardItem>

          <CardItem>
            <Button1 onPress={this._onLoginPressed.bind(this)}>LOGIN</Button1>
          </CardItem>
          <CardItem>
            <TouchableOpacity
              onPress={() => navigate('ForgotPassword')}
              style={styles.fp}>
              <Text>Forgot Password?</Text>
            </TouchableOpacity>
            <Text style={styles.errorStyle}>{this.props.error}</Text>
          </CardItem>
        </Card>
      </View>
      /*
      <View style={styles.image}>
        <Text style={styles.text}> HappyCow </Text>
        <View style={styles.t}>
          <Input
            placeholder="username"
            secureTextEntry={false}
            onChangeText={text => this.setState({username: text})}>
            username
          </Input>
          <Input
            placeholder="password"
            secureTextEntry={true}
            onChangeText={text => this.setState({password: text})}>
            password
          </Input>
          <Button1 onPress={this._onLoginPressed.bind(this)}>
            SE CONNECTER
          </Button1>

          <TouchableOpacity onPress={() => navigate('ForgotPassword')}>
            <Text>Mot de passe oublier!</Text>
          </TouchableOpacity>
        </View>
      </View>*/
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
export default LoginScreen;
