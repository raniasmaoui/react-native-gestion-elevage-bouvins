import React, {Component} from 'react';
//import {Button, TextInput, View} from 'react-native';
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

class ForgotPasswordScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }
  _onLoginPressed() {
    const {navigate} = this.props.navigation;
    fetch('https://parseapi.back4app.com/requestPasswordReset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': 'EEQ7Sp5CfmXlMZtLet88r41WjbBlbicd7ctsowZN',
        'X-Parse-REST-API-Key': 'JyaAKzthxhSNJQFj7hg9S0cXC8xFrptGfUrKi8ir',
      },
      body: JSON.stringify({
        email: this.state.email,
      }),
    })
      .then(response => response.json())
      .then(navigate('Login'))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Input
            label="Email :"
            placeholder="Enter your email"
            secureTextEntry={false}
            onChangeText={text => this.setState({email: text})}
          />
        </CardItem>
        <CardItem>
          <Button1 onPress={this._onLoginPressed.bind(this)}>SEND</Button1>
        </CardItem>
      </Card>
      /*
      <View>
        <TextInput
          placeholder="email"
          secureTextEntry={false}
          onChangeText={text => this.setState({email: text})}
        />
        <Button title="OK" onPress={this._onLoginPressed.bind(this)} />
      </View>*/
    );
  }
}
export default ForgotPasswordScreen;
