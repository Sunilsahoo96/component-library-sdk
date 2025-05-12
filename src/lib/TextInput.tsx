import React from 'react';
import '../styles/input.css';

interface TextInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, type, value, onChange, placeholder }) => (
  <div className="input-group">
    <label className="input-label">{label}</label>
    <input
      className="text-input"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default TextInput;
