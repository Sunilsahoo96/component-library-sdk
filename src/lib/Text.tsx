import React from 'react';
// import './styles/text.css';

interface TextProps {
  children: React.ReactNode;
  variant?: 'normal' | 'small';
}

const Text: React.FC<TextProps> = ({ children, variant = 'normal' }) => (
  <p className={`text-${variant}`}>{children}</p>
);

export default Text;