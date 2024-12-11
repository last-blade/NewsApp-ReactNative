import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Card = ({ item }) => {
  return (
    <View style={styles.card}>
      {item.urlToImage && (
        <Image source={{ uri: item.urlToImage }} style={styles.image} />
      )}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.authorName}>{item.author ? item.author : "Anonymous"}</Text>
      <Text>{new Date(item.publishedAt).toLocaleString('en-GB', {timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit',
    })}</Text>
        <TouchableOpacity>
            <Text style={styles.readMore    }>Read more</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },

  authorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "grey",
    marginTop: 10
  },

  readMore: {
    color: "blue",
    fontSize: 15,
    marginTop: 7
  }
});
