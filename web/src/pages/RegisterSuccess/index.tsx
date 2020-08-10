import React from 'react';
import { useHistory } from 'react-router-dom'

import background from '../../assets/images/bg.svg';
import checkedIcon from '../../assets/images/icons/success-check-icon.svg';

import './styles.css';

function RegisterSuccess() {
  
  const history = useHistory();

  function handleBtnClick(){
    history.push('study');
  }

  return (
    <div className="success" id="container">
      <img src={background} alt="background" />
      <div className="content">
        <img src={checkedIcon} alt="checked" />
        <h1>Cadastro salvo!</h1>
        <p>Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp.</p>
        <button onClick={handleBtnClick}>Acessar lista</button>
      </div>
    </div>
  );
}

export default RegisterSuccess;