import React from 'react';
import './style.css';

export default function () {
  return (
    <div className="main">
      <p className="sign" align="center">Вход</p>
      <form className="form1" action="/admin" method="POST">
        <input className="un" type="text" align="center" name="username" placeholder="Username" required />
        <input className="pass" type="password" align="center" name="password" placeholder="Password" required />
        <input type="submit" className="submit" value="Войти" />
      </form>
    </div>
  );
}
