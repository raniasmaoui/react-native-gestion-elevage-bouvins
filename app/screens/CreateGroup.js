import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Button1 from '../components/Button1';
import t from 'tcomb-form-native';
import AsyncStorage from '@react-native-community/async-storage';
const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  description: t.String,
});

class CreateGroup extends Component {
  handleSubmit = () => {
    //const {navigate} = this.props.navigation;
    const value = this._form.getValue();
    //const iduser = this.props.group;
    AsyncStorage.getItem('iduser').then(val => {
      let iduser = val;
      console.log(iduser);
      fetch('https://parseapi.back4app.com/classes/Group', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Parse-Application-Id': 'EEQ7Sp5CfmXlMZtLet88r41WjbBlbicd7ctsowZN',
          'X-Parse-REST-API-Key': 'JyaAKzthxhSNJQFj7hg9S0cXC8xFrptGfUrKi8ir',
        },
        body: JSON.stringify({
          group: {
            __type: 'Pointer',
            className: '_User',
            objectId: iduser,
          },
          name: value.name,
          description: value.description,
          //quantite: value.quantite,
        }),
      })
        .then(response => response.json())
        .then(responseJson => {
          this.props.navigation.push('AnimalsGroups');
          //navigate('AnimalsGroups');
        })
        .catch(error => {
          //alert(JSON.stringify(error));
          // console.error(error);
        });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref={c => (this._form = c)} // assign a ref
          type={User}
        />
        <Button
          title="SEND"
          onPress={this.handleSubmit}
          style={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    //backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: 'rgb(42, 55, 68)',
  },
});
export default CreateGroup;
