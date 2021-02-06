import React, { Component } from 'react';
import { Alert,Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';


import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class mapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          mapRegion: null,
          latitude: null,
          longitude: null
      };
    }

    onRegionChange(region, latitude, longitude) {
        this.setState({
          mapRegion: region,
          // If there are no new values set the current ones
          latitude: latitude || this.state.latitude,
          longitude: longitude || this.state.longitude
       });
    }

    
  
    render() {
      if(this.state.isLoading){
        return(
          <View style={styles.preloader}>
            <ActivityIndicator size="large" color="#9E9E9E"/>
          </View>
        )
      }
      return (
        // <ScrollView style={styles.container}>
        //   <View style={styles.inputGroup}>
        <View>
          <GooglePlacesAutocomplete
                placeholder='Enter Location'
                minLength={2}
                autoFocus={false}
                fetchDetails
                listViewDisplayed='auto'
                query={{
                    key: 'AIzaSyAt6JF4Sl9gSzzf69YvehNtCC7SIyR3Frs',
                    language: 'en',
                    types: 'geocode',
                }}
                currentLocation={false}
                onPress={(data, details = null) => {
                const region = {
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                    latitudeDelta: 0.00922 * 1.5,
                    longitudeDelta: 0.00421 * 1.5
                };
                this.onRegionChange(region, region.latitude, region.longitude);
                }}
            />
            <MapView
                // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{ flex: 1, width: window.width }}
                region={this.state.mapRegion}
                onRegionChange={(region) => {
                this.setState({
                    mapRegion: region
                });
                }}
                onPress={(e) => {
                const region = {
                        latitude: e.nativeEvent.coordinate.latitude,
                        longitude: e.nativeEvent.coordinate.longitude,
                        latitudeDelta: 0.00922 * 1.5,
                        longitudeDelta: 0.00421 * 1.5
                    }
                this.onRegionChange(region, region.latitude, region.longitude);
                }}
                >
                <MapView.Marker
                coordinate={{
                    // latitude: (this.state.latitude),
                    // longitude: (this.state.longitude),
                    longitude: (this.state.longitude) ? (this.state.longitude) : 0,
                    latitude: (this.state.latitude) ? (this.state.latitude) : 0,
                    // latitude: props && props.position && Number(props.position.latitude) ? Number(props.position.latitude) : 0,
                    // longitude: props && props.position && Number(props.position.longitude) ? Number(props.position.longitude) : 0
                }}
                title="Lokasi"
                description="Hello"
                />
                </MapView>
          </View>
        // </ScrollView>
      );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35
    },
    inputGroup: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center'
    }
})
  
export default mapScreen;