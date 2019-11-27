/* eslint-disable no-shadow */
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
import {Card, CardItem} from '../common';
/*const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 17,
    alignSelf: 'center',
    color: 'red',
  },
});*/

class SignUpScreen extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      currentUser: '',
    };
  }
  _onLoginPressed() {
    const {navigate} = this.props.navigation;
    fetch('https://parseapi.back4app.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Revocable-Session': 1,
        'X-Parse-Application-Id': 'EEQ7Sp5CfmXlMZtLet88r41WjbBlbicd7ctsowZN',
        'X-Parse-REST-API-Key': 'JyaAKzthxhSNJQFj7hg9S0cXC8xFrptGfUrKi8ir',
      },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.objectId) {
          fetch('https://parseapi.back4app.com//verificationEmailRequest', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Parse-Application-Id':
                'EEQ7Sp5CfmXlMZtLet88r41WjbBlbicd7ctsowZN',
              'X-Parse-REST-API-Key':
                'JyaAKzthxhSNJQFj7hg9S0cXC8xFrptGfUrKi8ir',
            },
            body: JSON.stringify({
              email: this.state.email,
            }),
          })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              if (data.objectId) {
                navigate('Login');
              } else {
                //console.log(data.objectId);
              }
            })
            .catch(error => console.error(error));
          navigate('Login');
        } else {
          //console.log(data.objectId);
        }
      })
      .catch(error => console.error(error));
  }

  render() {
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
              label="email :"
              placeholder="Enter your email"
              secureTextEntry={false}
              onChangeText={text => this.setState({email: text})}
            />
          </CardItem>
          <CardItem>
            <Input
              label="Password :"
              placeholder="Enter your password"
              secureTextEntry={true}
              onChangeText={text => this.setState({password: text})}
            />
          </CardItem>

          <CardItem>
            <Button1 onPress={this._onLoginPressed.bind(this)}>SIGN UP</Button1>
          </CardItem>
        </Card>
      </View>
      /*
      <View>
        <TextInput
          placeholder="username"
          secureTextEntry={false}
          onChangeText={text => this.setState({username: text})}
        />
        <TextInput
          placeholder="email"
          secureTextEntry={false}
          onChangeText={text => this.setState({email: text})}
        />
        <TextInput
          placeholder="password"
          secureTextEntry
          onChangeText={text => this.setState({password: text})}
        />
        <Button title="Login" onPress={this._onLoginPressed.bind(this)} />
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
export default SignUpScreen;
