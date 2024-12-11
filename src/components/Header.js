import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {MagnifyingGlassIcon} from "react-native-heroicons/solid";
// import Search from './Search';

const Header = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.appNameText]}>Live News</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
        <MagnifyingGlassIcon style={[styles.searcIcon]}/>
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: 4,
        paddingVertical: 2,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        elevation: 0.6
    },
    searcIcon: {
        color: "black",
    },

    appNameText: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 4,
        color: "red"
    }
})