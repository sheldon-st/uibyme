import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { MovementVideo } from './video';

interface IParameterPageProps {
  name: string;
  children: React.ReactNode;
}

export const ParameterPage: FC<IParameterPageProps> = ({ name, children }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p></p>
      <div>{children}</div>
    </div>
  );
};
