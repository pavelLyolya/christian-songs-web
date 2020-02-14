import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import CreateSong from './CreateSong';
import Login from './Login';
import './style.css';
import Authentication from '../services/Authentication';

function App() {
  return (
    <Router>

      <Switch>
        <Route
          path='/create'
          render={({ location }) =>
            Authentication.isAuthenticated ? (
              <CreateSong />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )}
        />
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <h1>Привет! Это молодежный сборник!</h1>
          <Link to='/create'>Добавь песню :)</Link>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
