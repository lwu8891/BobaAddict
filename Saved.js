import React, {Component} from 'react';
import {Button,StyleSheet,View,Image,AppRegistry,Text} from 'react-native';


class Saved extends React.Component {

 

    render() {


     
        return (
      
          <View style={styles.container}>
             <Text> Saved 1</Text>
              </View>
        )
      }
    }
  
  
  export default Saved;

  AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);    

  const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#d5efec"
  
   
    },
    title : {
        fontFamily: "Mali-Regular",
        fontSize: 40
        
      },
  });  
  