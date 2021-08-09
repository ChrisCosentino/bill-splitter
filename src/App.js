import React, { useMemo, useState } from 'react';

import Input from './components/Input';
import Radios from './components/Radio';

import iconDollar from './images/icon-dollar.svg';
import iconPerson from './images/icon-person.svg';

import TotalAmount from './components/TotalAmount';
// Radios

import './App.scss';

const radios = [
  {
    label: '5%',
    value: 0.05,
  },
  {
    label: '10%',
    value: 0.1,
  },
  {
    label: '15%',
    value: 0.15,
  },
  {
    label: '25%',
    value: 0.25,
  },
  {
    label: '50%',
    value: 0.5,
  },
];

const App = () => {
  const [billAmount, setBillAmount] = useState(null);
  const [tipPercent, setTipPercent] = useState(null);
  const [numPeople, setNumPeople] = useState(null);

  const handleBill = (value) => {
    setBillAmount(parseFloat(value) || 0);
  };

  const handleTip = (value) => {
    setTipPercent(parseFloat(value) || 0);
  };

  const handlePeople = (value) => {
    setNumPeople(parseInt(value) || 0);
  };

  const handleReset = () => {
    setBillAmount(null);
    setTipPercent(null);
    setNumPeople(null);
  };

  const results = useMemo(() => {
    const totalTip = billAmount * tipPercent;

    return {
      tipAmount: (totalTip / numPeople).toFixed(2),
      total: ((billAmount + totalTip) / numPeople).toFixed(2),
    };
  }, [billAmount, tipPercent, numPeople]);

  return (
    <div className='container'>
      <h1 className='appTitle'>
        Spli
        <br />
        tter
      </h1>

      <div className='Card'>
        <div className='col formContainer'>
          <Input
            label='Bill'
            icon={iconDollar}
            onChange={handleBill}
            value={billAmount?.toString() || ''}
          />
          <Radios keys={radios} onChange={handleTip} />
          <Input
            label='Number of people'
            icon={iconPerson}
            onChange={handlePeople}
            value={numPeople || ''}
          />
        </div>

        <div className='col totalCard'>
          <div>
            <TotalAmount title='Tip Amount' amount={results.tipAmount} />
            <TotalAmount title='Total' amount={results.total} />
          </div>

          <button className='resetBtn' onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
