import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen')
    }, 2000);
  }, [])
  return (
    <View style={[styles.bgColor, styles.container]}>
      <Animatable.Text style={[styles.text, styles.font]} className='text-green bg-green' animation="fadeInDownBig" duration={2000}>Live News</Animatable.Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: "red",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",     
  },

  text: {
    color: "white",
    // borderWidth: 1,
    // borderColor: "white",
    fontWeight: "bold"
  },

  font: {
    fontSize: 40,
  }
});
