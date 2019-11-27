import React, {Component} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import Button1 from '../components/Button1';
class VeterinaryScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.image}>
        <View style={styles.view}>
          <Button1
            onPress={() => navigate('MyVeterinary')}
            type="anchor"
            paddingHorizontal={70}
            paddingBottom={0}>
            vétérinaire conventioné
          </Button1>
          <Button1
            onPress={() => navigate('ListVeterinary')}
            type="anchor"
            paddingHorizontal={70}
            paddingBottom={0}>
            autres vétérinaires
          </Button1>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255, .7)',
  },
  button: {
    height: 40,
  },
});
export default VeterinaryScreen;
