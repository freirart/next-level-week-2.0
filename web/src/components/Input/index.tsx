import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  name: string;
}

const Input: React.FunctionComponent<InputProps> = ({ label, name, type,...rest }) => {
  return(
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} { ...rest } />
    </div>
  );
}

export default Input;