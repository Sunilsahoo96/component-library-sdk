import React, { useState } from 'react';
import Button from '../lib/Button';
import TextInput from '../lib/TextInput';
import FileUploader from '../lib/FileUploader';
import Heading from '../lib/Heading';
import Text from '../lib/Text';
import '../styles/components.css';
import { useNavigate } from 'react-router-dom';


const TicketForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    github: '',
    avatar: '', // base64 string
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAvatarUpload = (file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, avatar: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.github || !formData.avatar) {
      alert('Please fill in all fields and upload your avatar.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    localStorage.setItem('ticketData', JSON.stringify(formData));
    navigate('/success-ticket')
  };

  return (
    <div className="page ticket-form">
      <Heading title="Your Journey to Coding Conf 2025 Starts Here!" level={1}>
        Secure your spot at next year's biggest coding conference.
      </Heading>
      <Text>Fill in the form below to generate your custom ticket.</Text>
      <form onSubmit={handleSubmit} className="form">
        <FileUploader onUpload={handleAvatarUpload} />
        <TextInput
          label="Full Name"
          type="text"
          value={formData.fullName}
          onChange={(val) => handleChange('fullName', val)}
        />
        <TextInput
          label="Email address"
          type="email"
          value={formData.email}
          onChange={(val) => handleChange('email', val)}
        />
        <TextInput
          label="GitHub Username"
          type="text"
          value={formData.github}
          onChange={(val) => handleChange('github', val)}
        />
        <Button type="submit">Generate My Ticket</Button>
      </form>
    </div>
  );
};

export default TicketForm;
