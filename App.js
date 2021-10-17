import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import AttendanceScreen from './Screens/AttendanceScreen';
//import db from './config.js'

export default class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <View>
       <Text style = {styles.heading}> SCHOOL ATTENDANCE </Text>
       <AppContainer/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  heading:{
    backgroundColor: '#ffdf00',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center'
  }
})

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  AttendanceScreen: AttendanceScreen,
});

const AppContainer = createAppContainer(AppNavigator);
