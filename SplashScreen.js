
import React, {Component} from 'react';
import {Button,StyleSheet,View,Image,AppRegistry,Text,ActivityIndicator} from 'react-native';
import { Font } from 'expo';


class SplashScreen extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = { 
      isLoading: true ,
      fontLoaded: false

    }
  };

  async componentDidMount(){

    await Font.loadAsync({
      'Mali-Regular': require('./fonts/Mali/Mali-Regular.ttf'),
      'Nunito-SemiBold': require('./fonts/Nunito/Nunito-Regular.ttf')

    });
    this.setState({fontLoaded:true});
  }
 
  
 

    render() {

      
      const {navigate} = this.props.navigation;
      return (
    
        <View style={styles.container}>
            <Image
             style={{width: 350, height: 350}}
            source={require('./img/splashscreen.png')}
             />
             {this.state.fontLoaded ? ( 
             <Text style = {styles.title}>Boba Addicts</Text> )
             : (
               <ActivityIndicator size = "large"></ActivityIndicator>
             )}
           
             <Button
             title = "Find Local Boba Spots!"
             onPress={() => navigate('Profile')}
             />
            </View>
      )
    }
  }
  
  
  export default SplashScreen;

  AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);    

  const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1, 
        backgroundColor: "#d5efec"
  
   
    },
    title : {
        fontFamily: 'Mali-Regular',
        fontSize: 40
        
      },
  });  
  