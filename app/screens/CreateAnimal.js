import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Button1 from '../components/Button1';
import t from 'tcomb-form-native';
import AsyncStorage from '@react-native-community/async-storage';
const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  kit: t.maybe(t.String),
  sex: t.maybe(t.String),
  /*race: t.maybe(t.String),
  type: t.maybe(t.String),
  number: t.maybe(t.Number),
  buyingPrice: t.maybe(t.Number),
  typeOfAnimal: t.maybe(t.String),
  numberOfVelage: t.maybe(t.Number),*/
  numberOfLactation: t.maybe(t.Number),
  outputType: t.maybe(t.String),
  inputType: t.maybe(t.String),
  dateOfBirth: t.maybe(t.Date),
});
var options = {
  fields: {
    dateOfBirth: {
      mode: 'date', // display the Date field as a DatePickerAndroid
    },
  },
};
class CreateAnimal extends Component {
  handleSubmit = () => {
    //const {navigate} = this.props.navigation;
    const value = this._form.getValue();
    //const iduser = this.props.group;
    AsyncStorage.getItem('iduser').then(val => {
      AsyncStorage.getItem('id').then(vale => {
        let iduser = val;
        let id = vale;
        console.log(iduser);
        console.log(id);
        fetch('https://parseapi.back4app.com/classes/Animal', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Parse-Application-Id':
              'EEQ7Sp5CfmXlMZtLet88r41WjbBlbicd7ctsowZN',
            'X-Parse-REST-API-Key': 'JyaAKzthxhSNJQFj7hg9S0cXC8xFrptGfUrKi8ir',
          },
          body: JSON.stringify({
            group: {
              __type: 'Pointer',
              className: 'Group',
              objectId: id,
            },
            kit: {
              __type: 'Pointer',
              className: 'Kit',
              objectId: value.kit,
            },
            name: value.name,
            user: {
              __type: 'Pointer',
              className: '_User',
              objectId: iduser,
            },
            sex: value.sex,
            race: value.race,
            type: value.type,
            number: value.number,
            buyingPrice: value.buyingPrice,
            sellingPrice: value.sellingPrice,
            typeOfAnimal: value.typeOfAnimal,
            numberOfVelage: value.numberOfVelage,
            numberOfLactation: value.numberOfLactation,
            dateOfBirth: {
              __type: 'Date',
              iso: value.dateOfBirth,
            },
          }),
        })
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);
            this.props.navigation.push('Animals');
            //navigate('AnimalsGroups');
          })
          .catch(error => {
            //alert(JSON.stringify(error));
            // console.error(error);
          });
      });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref={c => (this._form = c)} // assign a ref
          type={User}
          options={options}
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
export default CreateAnimal;
