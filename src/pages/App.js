import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import CreateSong from './CreateSong';
import Login from './Login';
import './style.css';

function App() {
  return (
    <Router>

      <Switch>
        <Route path='/create'>
          <CreateSong />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <h1>Привет! Это молодежный сборник!</h1>
          <Link to='/login'>Перейди на страницу админа :)</Link>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
