import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SignUp from './containers/SignUp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/signup" exact render={props => <SignUp {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
