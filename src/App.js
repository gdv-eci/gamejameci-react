import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Router, Redirect, useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AdminView from './views/admin/AdminView';
import Main from './views/public/Main';
import FormInscripcion from './views/public/FormInscripcion';
import Thanks from './views/public/Thanks';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/main" />
          </Route>
          <Route path="/inscription" component={FormInscripcion} />
          <Route path="/main" component={Main} />
          <Route path="/admin" component={AdminView} />
          <Route path="/thanks" component={Thanks} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;
