import React, { Component } from 'react';

// components
import Layout from './components/Layout/'
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
