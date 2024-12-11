import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Card from './Card';

const HomeScreen = ({navigation}) => {
    const [Data, setData] = useState([]);
    const API_KEY = "8f8d4fdf20034dfaabc1c21fc6812183"
    const url = "https://newsapi.org/v2/everything?q=";

    const getNews = async () => {
        const response = await fetch("https://newsapi.org/v2/everything?q=india&apiKey=8f8d4fdf20034dfaabc1c21fc6812183");
        const data = await response.json();
        setData(data.articles)
        console.log(data);
    }


    useEffect(()=>{
        getNews()
    },[])


  return (
    <View style={[styles.container]}>
      <Header navigation={navigation}/>
      <View>
        <FlatList data={Data} renderItem={({item, index}) => {
            return <Card item={item}/>
        }}/>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})