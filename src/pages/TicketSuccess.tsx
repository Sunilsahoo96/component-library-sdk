import React from 'react';
import Button from '../lib/Button';
import Heading from '../lib/Heading';
import Text from '../lib/Text';
import '../styles/components.css';
import TicketCard from '../lib/TicketCard';
import { useNavigate } from 'react-router-dom';

const TicketSuccess: React.FC = () => {
  const data = JSON.parse(localStorage.getItem('ticketData') || '{}');
  const { fullName, email, github, avatar } = data;
  const navigate = useNavigate();

  return (
    <div className="page ticket-success">
      <Heading
        level={2}
        title={`Congrats, ${fullName?.split(' ')[0]}!`}
      >
       
      </Heading>

      <Text>Your ticket is ready.</Text>
      <Text>
        We've emailed your ticket to <span className="highlight">{email}</span>
      </Text>

      <TicketCard
        name={fullName}
        github={github}
        avatar={avatar}
        event="Coding Conf"
        location="Austin, TX"
        date="Jan 21, 2025"
      />

      <div style={{ marginTop: '1rem' }}>
        <Button onClick={() => navigate('/')}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default TicketSuccess;
