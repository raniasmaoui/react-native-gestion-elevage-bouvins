import React, {Component} from 'react';
import {StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

class MenuItem extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.menu_item}
        onPress={this.props.onPressButton}>
        <Image source={this.props.itemImage} style={styles.image} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  menu_item: {
    padding: 20,
    width: '33.33333%',
    //width: '33.33333%',
    height: '33.33333%',
    borderColor: '#808080',
    //padding: 5,
    //height: 200,
    //width: 200,  //The Width must be the same as the height
    borderRadius: 400, //Then Make the Border Radius twice the size of width or Height
    backgroundColor: '#D3D3D3',
    borderBottomColor: '#bbb',
    marginRight: 15,
    marginLeft: 40,
    marginTop: 30,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
    padding: 0.8,
    //borderColor: '#fff',
    borderWidth: 3,
  },
  itemTitle: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
    padding: 0.8,
    color: '#fff',
    //borderColor: '#fff',
    //borderWidth: 3,
  },
});
export default MenuItem;
