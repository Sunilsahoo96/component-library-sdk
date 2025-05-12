import React from 'react';
import '../styles/ticket-card.css';

interface TicketCardProps {
  name: string;
  github: string;
  avatar: string;
  event: string;
  location: string;
  date: string;
}

const TicketCard: React.FC<TicketCardProps> = ({
  name,
  github,
  avatar,
  event,
  location,
  date,
}) => {
  return (
    <div className="ticket-card">
      <div className="ticket-left">
        <img
          src={avatar || '/default-avatar.png'}
          alt="avatar"
          className="ticket-avatar"
        />
        <div className="ticket-info">
          <h3>{name}</h3>
          <p>@{github}</p>
        </div>
      </div>
      <div className="ticket-right">
        <p>{event}</p>
        <p>{date} | {location}</p>
      </div>
    </div>
  );
};

export default TicketCard;
