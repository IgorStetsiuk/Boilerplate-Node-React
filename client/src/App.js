import React, { Component } from 'react';


class App extends Component {
  getHello() {
    fetch('/api/hello/')
      .then(res => res.json())
      .then(res=>console.log(res));
  }
  render() {
    this.getHello();
    return (<h1>Hello world</h1>);
  }
}

export default App;
