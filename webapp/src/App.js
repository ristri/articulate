import React, { Component } from 'react';
import Landing from './Landing'
import Modal from './Modal'
import 'bulma/css/bulma.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalActive: false,
      url:''
    }
    this.toggleModalStatus = this.toggleModalStatus.bind(this)
    this.changeURL = this.changeURL.bind(this)
  }
  changeURL(e){
    this.setState({url:e})
  }
  toggleModalStatus(){
    this.setState({isModalActive:!this.state.isModalActive})
  }
  render() {
    return (
      <div className="App">
        <Modal url={this.state.url} status={this.state.isModalActive} changeStatus={this.toggleModalStatus}></Modal>
        <Landing changeURL={this.changeURL} changeStatus={this.toggleModalStatus}></Landing>
      </div>
    );
  }
}

export default App;
