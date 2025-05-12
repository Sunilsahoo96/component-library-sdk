import React, { ElementType } from 'react';
// import './styles/heading.css';

interface HeadingProps {
  title: string;
  children?: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading: React.FC<HeadingProps> = ({ title, children, level = 1 }) => {
  const Tag: ElementType = `h${level}`;

  return (
    <div className="heading">
      <Tag>{title}</Tag>
      {children && <p>{children}</p>}
    </div>
  );
};

export default Heading;
