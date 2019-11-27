import React, {Component} from 'React';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

class AnimalsItem extends Component {
  render() {
    const animal = this.props.animal;
    return (
      <TouchableOpacity>
        <View style={styles.main_container}>
          <Image
            style={styles.image}
            source={require('../assets/menuIcons/cow.png')}
          />
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              <Text style={styles.title_text}>{animal.name}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 90, //190,
    flexDirection: 'row',
  },
  image: {
    width: 80, // 120,
    height: 90, //180,
    margin: 5,
    backgroundColor: 'gray',
  },
  content_container: {
    flex: 1,
    margin: 5, //5,
    //backgroundColor: '#DCDCDC',
  },
  header_container: {
    flex: 3,
    flexDirection: 'row',
  },

  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'blue',
  },
  description_container: {
    flex: 7,
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
  },
  date_container: {
    flex: 2,
    flexDirection: 'row-reverse',
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14,
  },
});
export default AnimalsItem;
