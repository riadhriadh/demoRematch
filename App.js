import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider, connect } from 'react-redux'
import store from './src/models/store';
import PageHello from './src/pagehello/index'
import createPersistPlugin, { getPersistor } from '@rematch/persist'
import { PersistGate } from 'redux-persist/es/integration/react'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: null,
    };
  }
  componentDidMount(){
   
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={getPersistor()}>
        <View style={{flex:1}}>
        <PageHello></PageHello> 
        </View>
        </PersistGate>
        </Provider>
    );
  }
}
