import React, { Component } from 'react';
import { Alert,Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase from '../database/firebaseDb';

// import MapView from 'react-native-maps';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class AddUserScreen extends Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('users');
    this.state = {
      name: '',
      NPM: '',
      jurusan: '',
      isLoading: false
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  storeUser() {
    if(this.state.name === ''){
     alert('Fill at least your name!')
    } else {
      this.setState({
        isLoading: true,
      });      
      this.dbRef.add({
        name: this.state.name,
        NPM: this.state.NPM,
        jurusan: this.state.jurusan,
      }).then((res) => {
        this.setState({
          name: '',
          NPM: '',
          jurusan: '',
          isLoading: false,
        });
        this.props.navigation.navigate('UserScreen')
      })
      .catch((err) => {
        console.error("Error found: ", err);
        this.setState({
          isLoading: false,
        });
      });
    }
  }

  render() {
    console.disableYellowBox=true
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Nama'}
              value={this.state.name}
              onChangeText={(val) => this.inputValueUpdate(val, 'name')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              // multiline={true}
              // numberOfLines={4}
              placeholder={'NPM'}
              value={this.state.NPM}
              onChangeText={(val) => this.inputValueUpdate(val, 'NPM')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Jurusan'}
              value={this.state.jurusan}
              onChangeText={(val) => this.inputValueUpdate(val, 'jurusan')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Alamat'}
              value={this.state.alamat}
              onChangeText={(val) => this.inputValueUpdate(val, 'alamat')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Add Users'
            onPress={() => this.storeUser()} 
            color="#19AC52"
          />
        </View>
      </ScrollView>
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

export default AddUserScreen;