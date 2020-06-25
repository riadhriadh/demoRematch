import React, { Component } from 'react';
import { View, Text ,Button} from 'react-native';
import { Provider, connect } from 'react-redux'
 class PageHello extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:"red"}}>
        <Button onPress={this.props.increment} title="hello"></Button>
        <Button onPress={this.props.incrementAsync}title="incr"></Button>
        <View style={{backgroundColor:"white",flex:1}}>
        <Text>{this.props.count}</Text>
        </View>
      </View>
    );
  }
}
const mapState = state => ({
    count: state.count,
})

const mapDispatch = ({ count: { increment, incrementAsync } }) => ({
    increment: () => increment(-1),
    incrementAsync: () => incrementAsync(1),
})

export default  connect(
    mapState,
    mapDispatch
)(PageHello)
