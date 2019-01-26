import React, { Component } from 'react';
import Landing from './Landing'
import 'bulma/css/bulma.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      isModalActive:false
  }
  }
  render() {
    return (
      <div className="App">
         <Landing></Landing>
      </div>
    );
  }
}

export default App;
