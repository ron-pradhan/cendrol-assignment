import './style.css';
import { useState } from 'react';
import { useToggle } from './Toggle';

const SecondComponent = ({ cendol, handleIncrement, circleColor }) => {
  const [buttonColor, setButtonColor] = useToggle();
  const [circleBg, setCircleBg] = useState(circleColor);

  const handleColor = () => {
    setButtonColor(!buttonColor);
    setCircleBg(!buttonColor ? '#272789' : '#b41e1e');
  };

  return (
    <div className='center container'>
      <div className='center square'>
        <div className='center circle' style={{ background: circleColor }}>
          <span style={{ fontSize: '3rem', fontWeight: '700' }}>{cendol}</span>
          <span
            style={{
              fontSize: '0.9rem',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
            onClick={() => handleIncrement(circleBg)}
          >
            Click to increase counter
          </span>
        </div>
      </div>
      <div>
        <button
          className='color__btn'
          style={{ backgroundColor: buttonColor ? '#272789' : '#b41e1e' }}
          onClick={handleColor}
        >
          Change Color
        </button>
      </div>
    </div>
  );
};

export default SecondComponent;
