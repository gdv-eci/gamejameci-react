import React, { Component } from 'react';
import Stomp from 'stompjs';
import ChildComponent from './ChildComponent';

class MainStomp extends Component {

  static propTypes = {
    client: Stomp
  }

  constructor(props) {
    super(props);
    this.state = {
      client: null
    }
  }
  
  componentDidMount() {
    // this.connectStomp();
  }

  connectStomp = () => {
    var client = Stomp.client("ws://localhost:8080/ws-message");
    this.setState({
      client: client
    }, () => {
      client.reconnect_delay = 10000;
      client.connect({}, this.onConnect, this.onError);
    })
  }

  onConnect = frame => {
    // console.log('Connected: ' + frame);
    this.state.client.subscribe("/topics/message", (res) => {
      console.log(res);
    });
  }

  onError = error => {
    console.log('Error: ' + error);
  }
  

  render() {
    return (
      <div>
        <ChildComponent client={this.state.client} />
      </div>
    );
  }
}

export default Main;
