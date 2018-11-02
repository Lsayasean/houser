import React, { Component } from 'react';
import Header from './components/header/Header';
import { HashRouter } from 'react-router-dom';
import store from './ducks/store'
import routes from './route'
import { Provider } from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Header />
            {routes}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
