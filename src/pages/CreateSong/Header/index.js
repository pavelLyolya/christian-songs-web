import React, {useCallback} from 'react';
import { useHistory } from "react-router-dom";
import {Button} from "@material-ui/core";
import cross from '../../../assets/cross.png';
import './style.css';
import Authentication from "../../../services/Authentication";

function Header() {
  const history = useHistory();
  const signOut = useCallback(() => {
    Authentication.signOut();
    history.push('/');
  }, [history]);
  return (
    <header className="header">
      <div className="header-wrap wrap">
        <figure className="logo">
          <img className="logo-img" src={cross} alt="LOGO" />
          <figcaption className="logo-text">
            <span>СБОРНИК</span>
            <span>МОЛОДЁЖНЫХ</span>
            <span>ПЕСЕН</span>
          </figcaption>
        </figure>
        <Button
          onClick={signOut}
          variant='contained'
          size='small'
          color='primary'
        >
          Выйти
        </Button>
      </div>
    </header>
  );
}

export default Header;
