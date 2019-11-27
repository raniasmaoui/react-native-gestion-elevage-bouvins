import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    //height: 200,
    borderRadius: 15,
    marginHorizontal: 25,
    marginVertical: 10,
    backgroundColor: 'rgb(42, 55, 68)',
    justifyContent: 'center',
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

const Button1 = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default Button1;
