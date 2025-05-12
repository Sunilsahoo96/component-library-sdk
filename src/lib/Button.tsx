import React from 'react';
import '../styles/button.css';

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button' }) => {
  return (
    <button className="btn" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
