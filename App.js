import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider, connect } from 'react-redux'
import store from './src/models/store';
import PageHello from './src/pagehello/index'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: null,
    };
  }
  componentDidMount(){
    alert(JSON.stringify(store))
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
        <PageHello></PageHello> 
        </View>
        </Provider>
    );
  }
}
