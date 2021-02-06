// screens/UserScreen.js

import React, { Component } from 'react';
import { Button, StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../database/firebaseDb';

class UserScreen extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('users');
    this.state = {
      isLoading: true,
      userArr: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((res) => {
      const { name, NPM, jurusan, alamat } = res.data();
      userArr.push({
        key: res.id,
        // res,
        name,
        NPM,
        jurusan,
        alamat
      });
    });
    this.setState({
      userArr,
      isLoading: false,
   });
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
      // <ScrollView style={styles.container}>
        <View>
          {
            this.state.userArr.map((item, i) => {
              return (
                <Button
                  key={i}
                  // chevron
                  bottomDivider
                  title={item.name}
                  // subtitle={item.NPM}
                  onPress={() => {
                    this.props.navigation.navigate('UserDetailScreen', {
                      userkey: item.key
                    });
                  }}/>
                // <ListItem key={i} bottomDivider>
                //   <ListItem.Content>
                //     <ListItem.Title>{item.name}</ListItem.Title>
                //     <ListItem.subtitle>{item.NPM}</ListItem.subtitle>
                //   </ListItem.Content>
                //   <ListItem.Chevron />
                // </ListItem>
              );
            })
          }
          </View>
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   color: 'red',
   paddingBottom: 1
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

export default UserScreen;