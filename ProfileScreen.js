
import React, {Component} from 'react';
import { ImageBackground,StyleSheet,SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { SearchBar} from 'react-native-elements';   
import Saved from './Saved';
import Options from './Options';
import Icon from 'react-native-vector-icons/Ionicons';
import {MapView,Location,Permissions} from 'expo'
import Map from './Map/Map'
import YelpService from './Yelp/Yelp'



const region = {
  latitude: 37.321996988,
  longitude: -122.0325472123455,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}

const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};


class ProfileScreen extends React.Component {

  
  
  state = {
    region: null,
    bobaShops: []
  }

  componentWillMount() {
    this.getLocationAsync();
  }
  getBobaShops = async () => {
    const { latitude, longitude } = this.state.region;
    const userLocation = { latitude, longitude };
    const bobaShops = await YelpService.getBobaShops(userLocation);
    this.setState({ bobaShops });
  };
  
  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied'
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    const region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      ...deltas
    };  
    await this.setState({ region });
    await this.getBobaShops();
  }

  render() {
    const { region, bobaShops } = this.state;
    return (
      <SafeAreaView style={styles.container}>
      <Map
        region={region}
        places={bobaShops}
      />
    </SafeAreaView>
      
    );
  }
}



  export default createBottomTabNavigator({

    Home:{
        screen: ProfileScreen,
        navigationOptions:{
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) => (
                <Icon name = "ios-home" color = {tintColor} size={24}/>
            )
        }

    },
   
    Options:{
        screen: Options,
        navigationOptions:{
            tabBarLabel: 'Options',
            tabBarIcon: ({tintColor}) => (
                <Icon name = "md-cog" color = {tintColor} size={24}/>
            )
        }
    }

  })

  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
      }


 
    

  });  
  