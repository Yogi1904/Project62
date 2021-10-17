import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AttendanceScreen from "./AttendanceScreen";

export default class HomeScreen extends React.Component{
  render(){
    return(
      <View>
          <TouchableOpacity style = {styles.presentButton}><Text style = {styles.buttonText}> Present </Text></TouchableOpacity>
          
          <TouchableOpacity style = {styles.presentButton}><Text style = {styles.buttonText}> Present </Text></TouchableOpacity>
          
          <TouchableOpacity style = {styles.presentButton}><Text style = {styles.buttonText}> Present </Text></TouchableOpacity>

          <TouchableOpacity style = {{ flexDirection: "row",
    marginLeft: '80%',
    marginTop: -107,
    backgroundColor: "#ff5555",
    flexWrap: "wrap",
    width: '20%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5}}><Text style = {styles.buttonText}> Absent </Text></TouchableOpacity>
          
          <TouchableOpacity style = {styles.absentButton}><Text style = {styles.buttonText}> Absent </Text></TouchableOpacity>
          
          <TouchableOpacity style = {styles.absentButton}><Text style = {styles.buttonText}> Absent </Text></TouchableOpacity>

        <TouchableOpacity style = {styles.submitB} onPress = {() =>{this.props.navigation.navigate(AttendanceScreen)}}> <Text style = {styles.submitBText}> SUBMIT </Text> </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  submitB:{
    marginTop: 100,
    backgroundColor: '#ff5f00',
    width: '45%',
    height: 40,
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'center'
  },

  submitBText:{
    textAlign: 'center',
    fontSize: '125%',
    fontWeight: 'bold',
    color: 'white'
  },

  absentButton: {
    flexDirection: "row",
    marginLeft: '80%',
    marginTop: 20,
    backgroundColor: "#ff5555",
    flexWrap: "wrap",
    width: '20%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5
  },

  presentButton: {
    marginLeft: '60%',
    width: '20%',
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5
  },

  buttonText:{
    alignSelf: 'center',
    justifyContent: 'center'
  }
})