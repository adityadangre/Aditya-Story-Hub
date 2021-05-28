import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStory extends React.Component {
  render(){
    return (
      <View style={styles.container}>
      <Text style={styles.header}>Story Hub</Text>
      <Text style={styles.text}>Read Story</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      header: {
        fontSize: 35,
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#C71C69',
        height: 55,
        textAlign: 'center',
        marginTop: 30
      },
      text: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 250
      },
});