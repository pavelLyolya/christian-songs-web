import React, {useCallback, useRef, useState} from 'react';
import { useHistory } from "react-router-dom";
import {Button} from "@material-ui/core";
import './style.css';
import Authentication from "../../services/Authentication";

export default function () {
  let history = useHistory();

  const formRef = useRef(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onUsernameChange = useCallback((event) => setUsername(event.target.value), []);
  const onPasswordChange = useCallback((event) => setPassword(event.target.value), []);

  const submitLogin = useCallback(async () => {
    if (formRef && formRef.current.reportValidity()) {
      const isAuth = await Authentication.authenticate(username, password);
      if (!isAuth) {
        setUsername('');
        setPassword('');
        return;
      }
      history.push('/create');
    }
  }, [formRef, username, password, history]);

  return (
    <div className="main">
      <p className="sign" align="center">Вход</p>
      <form ref={formRef} className="form1" >
        <input
          onChange={onUsernameChange}
          value={username}
          className="un"
          type="text"
          align="center"
          placeholder="Username"
          required
        />
        <input
          onChange={onPasswordChange}
          value={password}
          className="pass"
          type="password"
          align="center"
          placeholder="Password"
          required
        />
        <Button
          onClick={submitLogin}
          className='submit'
          variant='contained'
          size='small'
          color='primary'
        >
          Войти
        </Button>
      </form>
    </div>
  );
}
