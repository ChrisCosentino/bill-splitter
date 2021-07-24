import React from 'react';

const TotalAmount = ({ title, amount }) => {
  return (
    <div className='TotalAmount'>
      <div className='titleContainer'>
        <span className='title'>{title}</span>
        <span className='subtitle'>/ person</span>
      </div>

      <div className='amount'>$ {amount}</div>
    </div>
  );
};

export default TotalAmount;
