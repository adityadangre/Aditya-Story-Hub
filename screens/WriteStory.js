import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class WriteStory extends React.Component {
  render(){
    return (
      <View style={styles.container}>
      <Text style={styles.header}>Story Hub</Text>

                <TextInput 
                    placeholder="Story Title"
                    style={styles.title}
                    placeholderTextColor='black'/>
                <TextInput
                    placeholder="Author"
                    placeholderTextColor='black'
                    style={styles.author} />
                <TextInput 
                    placeholder="Write your story"
                    placeholderTextColor='black'
                    style={styles.storyText}
                    multiline={true}/>
                
                <TouchableOpacity
                    style={styles.submitButton}
                   >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
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
        fontFamily: 'Pattaya',
        fontSize: 35,
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#C71C69',
        height: 55,
        textAlign: 'center',
        marginTop: 30
      },
      title:{
          height: 40,
          borderWidth: 2,
          marginTop: 40,
          margin: 10,
          color:'black',
          padding: 6,
    
      },
      author: {
          height: 40,
          borderWidth: 2,
          margin: 10,
           padding: 6,
      },
      storyText: {
          height: 250,
          borderWidth: 2,
          margin: 10, 
          padding: 6,
      },
      submitButton:{
          justifyContent: 'center',
          alignSelf: 'center',
          backgroundColor: '#C71C69',
          width: 80,
          height: 40,
          color:'black',
          borderRadius: 50
      },
      buttonText: {
          textAlign: 'center',
          color: 'white',
          fontWeight: 'bold',
      }
});