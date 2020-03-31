import React, { Component } from 'react';
import './App.css';

import ShowButtonClass from './components'

class App extends Component {
  state = {
    goodMood: "hi",
    badMood: "bye"
  }

  render(){
    return (
      <div className="App">
          <ShowButtonClass 
          goodMood={this.state.goodMood} 
          badMood={this.state.badMood}
          />
      </div>
  );
  }
}

export default App;
///cvb
