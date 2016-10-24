/**
 * Created by codeforcoffee on 10/24/16.
 */

import React, { Compoent } from 'react';

export default class RestProvider {

  constructor(uri) {
    this.uri = uri;
  }

  getMovieFromApiAsync(callback) {
    return fetch(this.uri)
      .then((response) => response.json())
      .then((responseJson) => {
        callback(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

};