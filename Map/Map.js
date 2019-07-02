import React, { Component } from 'react';
import { Image,View, Text,Button,ScrollView } from 'react-native';
import { MapView } from 'expo';
import Modal from "react-native-modal";

const Marker = MapView.Marker;

export default class Map extends Component {

state = {
  visibleModal: null,
  isModalVisible: false
};

toggleModal = () => {
  this.setState({ isModalVisible: !this.state.isModalVisible });
};

renderModalContent (){
  
  <View style={styles.content}>
    <Button
      onPress={() => this.setState({ visibleModal: null })}
      title="Close"
    />
  </View>
}



  renderMarkers() {
    return this.props.places.map((place,i) => (
      <View>
         <Modal isVisible={this.state.visibleModal === 'default'}>
          {this.renderModalContent()}
        </Modal>
      <Marker
        key={i}
        title={place.name}
        description = {'Rating: ' + place.rating  + '/5' + '   '  + 'Price Range: '  + place.price } 
        coordinate={place.coords}

      >
      <Image source={require('./marker.png')} style={{ width: 20, height: 30 }} />

      </Marker>
      </View>
    ));
  }

  render() {
    const { region } = this.props

    return (
      
      <MapView
      style={styles.container}
      region={region}
      showsUserLocation
      showsMyLocationButton
      
      >
        {this.renderMarkers()}
      </MapView>
      
    );
  }
}

const styles = {
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModalContent1: {
    height: 200,
    backgroundColor: '#87BBE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText1: {
    fontSize: 20,
    color: 'white',
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: '#A9DCD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText2: {
    fontSize: 20,
    color: 'white',
  }
}