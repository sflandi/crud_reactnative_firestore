import React, { Component } from 'react';
import { Alert,Button, Image, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';


import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const latitudeDelta = 0.025
const longitudeDelta = 0.025

class mapScreen extends Component {
    state={
        region: {
            latitudeDelta,
            longitudeDelta,
            // latitude: 33.7444613,
            // longitude: -118.3870173,
            latitude: -6.250168,
            longitude: 106.819250,
        }
    }

    onChangeValue = region =>{
        alert(JSON.stringify(region))
        this.setState({
            region
        })
    }

    render(){
        console.disableYellowBox=true
        return(
            <View style={{flex:1}}>
                <MapView
                    style={{flex:1}}
                    initialRegion={this.state.region}
                    onRegionChangeComplete={this.onChangeValue} />
                <View style={{top:'50%', left:'50%', marginLeft:-24, marginTop:-48, position:'absolute'}}>
                    <Image style={{height:48, width:48}} source={require('../src/asset/pin.png')} />
                </View>
            </View>
        )
    }
}
  
export default mapScreen;