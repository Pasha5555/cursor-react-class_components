import React, { Component } from 'react';
import './contacts.css'

import ContactsClass from './contacts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactsClass />
      </div>
    );
  }
}

export default App;