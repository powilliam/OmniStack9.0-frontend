import React from 'react';

import logo from './assets/logo.svg';

import './app.css';

const App = (props) => {
  const { greetings } = props;
  return (
    <div className="container">
      <img src={logo} alt="AirCnC logo"/>

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>

        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Seu melhor e-mail"
            />

            <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
