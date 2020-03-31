import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Stomp from 'stompjs';

class ChildComponent extends Component {

  static propTypes = {
    client: Stomp
  };

  sendMessage = () => {
    const { client } = this.props // websocket instance passed as props to the child component.

    client.send("/app/message", { priority: 9 }, "Hello, STOMP");
  }

  render() {
    return (
      <div>
        <Button variant="info" onClick={this.sendMessage} >Send</Button>
      </div>
    );
  }
}

export default ChildComponent;
