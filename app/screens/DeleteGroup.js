import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  description: t.String,
  typeOfFood: t.String,
  Quantite: t.String,
});

export default class DeleteGroup extends Component {
  delete(id) {
    fetch('https://parseapi.back4app.com/classes/Group/' + id.toString(), {
      method: 'DELETE',
      headers: {
        'X-Parse-Application-Id': 'EEQ7Sp5CfmXlMZtLet88r41WjbBlbicd7ctsowZN',
        'X-Parse-REST-API-Key': 'JyaAKzthxhSNJQFj7hg9S0cXC8xFrptGfUrKi8ir',
      },
      //  body: JSON.stringify({OBJECT_ID:'wtevXkKVAR'})
    })
      .then(response => response.json())
      .then(response => {
        this.props.navigation.navigate('AnimalsGroups');
      });
  }
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
