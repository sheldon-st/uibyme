import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { MovementVideo } from './video';

interface IParameterPageProps {
  name: string;
  children: React.ReactNode;
  previous: string;
  next: string;
}

export const ParameterPage: FC<IParameterPageProps> = ({
  name,
  children,
  previous,
  next,
}) => {
  return (
    <div>
      <div
        className="header"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '0 ',
          height: 'fit-content',
          alignItems: 'center',
        }}
      >
        <h1 className="h1">
          <Link to="/" style={{ textDecoration: 'none', textAlign: 'center' }}>
            <span className="ret">← </span>
          </Link>
          <span className="span">Parameter: </span>
          {name}
        </h1>
        <div className="button-container">
          <Link to={`/${previous}`} style={{ textDecoration: 'none' }}>
            {/* back arrow character and then previous parameter in span not button*/}
            <span className="link">← {previous}</span>
          </Link>
          <div style={{ width: '16px' }}></div>
          <Link to={`/${next}`} style={{ textDecoration: 'none' }}>
            <span className="link">{next} →</span>
          </Link>
        </div>
      </div>
      {/* Buttons for return home and next parameter: */}

      <p></p>
      <div>{children}</div>
    </div>
  );
};
