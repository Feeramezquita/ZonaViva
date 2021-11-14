import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MasterLayout from './layouts/admin/MasterLayout';
import Home from './components/frontend/Home';
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
import Store from './components/frontend/Store';
import Nosotros from './components/frontend/Nosotros';
import Contactanos from './components/frontend/Contactanos';
import axios from 'axios';

axios.defaults.baseURL = window.apiURL
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/contactanos" component={Contactanos} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/store" component={Store} />
          <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
