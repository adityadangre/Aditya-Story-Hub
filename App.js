import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WriteStory from './screens/WriteStory'
import ReadStory from './screens/ReadStory'

export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: {screen: WriteStory, navigationOptions: {
    tabBarLabel: 'Write Story',
    tabBarIcon: <Image
    source={require("./assets/write.png")}
    style={{width:30, height:30}}
  />
  }},
  ReadStory: {screen: ReadStory, navigationOptions: {
    tabBarLabel: 'Read Story',
    tabBarIcon: <Image
    source={require("./assets/read.png")}
    style={{width:30, height:30}}
  />
  }},
}
);

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
