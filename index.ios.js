/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  AlertIOS
} from 'react-native';
import RestProvider from './RestProvider';

export default class Crudalicious extends Component {
  _getMovieFromApi(callback) {
    let apiProvider = new RestProvider(
      'https://www.omdbapi.com/?t=empire+strikes&y=&plot=short&r=json');
    return apiProvider.getMovieFromApiAsync(callback);
  }
  render() {
    this._getMovieFromApi((model) => {
      AlertIOS.alert(
        'OMDB',
        model.Title
      )
    });
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          OMDB API Example
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

class Movie extends Component {
  getMovieFromApiAsync() {
    return fetch('',
      { method: 'GET'})
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    let json = this.getMovieFromApiAsync();
    return (
      <View>
        <Text>{json.Title}</Text>
        <Text>{json.Plot}</Text>
        <Image source={json.Poster}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Crudalicious', () => Crudalicious);
