import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import t from 'tcomb-form-native';
import AsyncStorage from '@react-native-community/async-storage';
const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  description: t.String,
});

const newLocal = 'Pointer';
class UpdateGroup extends Component {
  handleSubmit = () => {
    const {navigate} = this.props.navigation;
    const value = this._form.getValue();
    fetch('https://parseapi.back4app.com/classes/Group/' + idgroupe, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': 'EEQ7Sp5CfmXlMZtLet88r41WjbBlbicd7ctsowZN',
        'X-Parse-REST-API-Key': 'JyaAKzthxhSNJQFj7hg9S0cXC8xFrptGfUrKi8ir',
      },
      body: JSON.stringify({
        name: 'rania smaoui',
        description: 'rania rania rania',
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        navigate('AnimalsGroups');
        Alert.alert('ok' + responseJson);
        console.log(responseJson);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref={c => (this._form = c)} // assign a ref
          type={User}
        />
        <Button title="ENVOYER" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
export default UpdateGroup;
