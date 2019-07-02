import React, {Component} from 'react';
import {Button,StyleSheet,View,Image,AppRegistry,Text} from 'react-native';
import {ButtonGroup,Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';


const component1 = () =><Text style = {styles.Nunito}> Distance</Text>
const component2 = () =><Text style = {styles.Nunito}>Highest Rated</Text>
const component3 = () =><Text style = {styles.Nunito}>Most Reviews</Text>

const component4 = () =><Text style = {styles.Nunito}>$</Text>
const component5 = () =><Text style = {styles.Nunito}>$$</Text>
const component6 = () =><Text style = {styles.Nunito}>$$$</Text>

const component7 = () =><Text style = {styles.Nunito}> Drinks Only <Icon name = "pagelines" size={15}/> </Text>
const component8 = () =><Text style = {styles.Nunito}> Includes Food <Icon name = "cookie-bite" size={15}/></Text>



class Options extends React.Component {
    constructor () {
        super()
        this.state = {
          selectedIndexSortBy: 2,
          selectedIndexPrices: 2,
          selectedIndexFood:2,
          fontLoaded: false
        }
        this.updateIndex = this.updateIndex.bind(this)
        this.updateIndexPrices = this.updateIndexPrices.bind(this)
        this.updateIndexFood = this.updateIndexFood.bind(this)
      }

      updateIndex (selectedIndexSortBy) {
        this.setState({selectedIndexSortBy})
      }
      updateIndexPrices (selectedIndexPrices) {
        this.setState({selectedIndexPrices})
      }
      updateIndexFood (selectedIndexFood) {
        this.setState({selectedIndexFood})
      }

      async componentDidMount(){

        await Font.loadAsync({
          'Mali-Regular': require('./fonts/Mali/Mali-Regular.ttf'),
          'Nunito-SemiBold': require('./fonts/Nunito/Nunito-Regular.ttf')
    
        });
        this.setState({fontLoaded:true});
      }

      
  
  

    render() {

        const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
        const buttons1 = [{ element: component4 }, { element: component5 }, { element: component6 }]
        const buttons2 = [{ element: component7}, { element: component8}]
        const { selectedIndexSortBy } = this.state
        const { selectedIndexPrices} = this.state
        const { selectedIndexFood} = this.state


     
      return (
    
        <View style={styles.container}>
        <Text style = {styles.title}>Sort By</Text>
        <ButtonGroup style = {styles.roundedCorners}
      onPress={this.updateIndex}
      selectedIndex={selectedIndexSortBy}
      buttons={buttons}
      containerStyle={{height: 40 , borderRadius: 20 , marginTop: 20}}/>

    <Divider style={{ backgroundColor:'gray', marginTop:30, height: 2, width:330,marginLeft:35,opacity:0.4}}/>

    <Text style = {styles.alignedTitle}>Prices</Text>
    <ButtonGroup style = {styles.roundedCorners}
      onPress={this.updateIndexPrices}
      selectedIndex={selectedIndexPrices}
      buttons={buttons1}
      containerStyle={{height: 40 , borderRadius: 20 , marginTop: 20}}/>

<Divider style={{ backgroundColor:'gray', marginTop:30, height: 2, width:330,marginLeft:35,opacity:0.4}}/>

<Text style = {styles.alignedTitle}>Type</Text>
    <ButtonGroup style = {styles.roundedCorners}
      onPress={this.updateIndexFood}
      selectedIndex={selectedIndexFood}
      buttons={buttons2}
      containerStyle={{height: 40 , borderRadius: 20 , marginTop: 20}}/>
<Divider style={{ backgroundColor:'gray', marginTop:30, height: 2, width:330,marginLeft:35,opacity:0.4}}/>
     </View> 
      )
    }
  }
  
  
  export default Options;

  AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);    

  const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#d5efec"
  
   
    },
    title : {
        fontFamily: "Nunito-Bold",
        fontSize: 20,
        textAlign: 'center',
        marginTop: 70,
        marginRight: 250
        
      },
      alignedTitle : {
        fontFamily: "Nunito-Bold",
        fontSize: 20,
        textAlign: 'center',
        marginTop: 50,
        marginRight: 250
        
      },
    Nunito : {
        fontFamily: "Nunito-Bold",
        fontSize: 15,
    }
  });  
  