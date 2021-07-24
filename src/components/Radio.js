import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';

const Radio = ({ keys, onChange }) => {
  const onValueChange = (value) => {
    onChange(parseFloat(value));
  };
  return (
    <>
      <label className='inputLabel'>Select Tip %</label>
      <div className='RadioGroup'>
        {keys.map((i) => (
          <input
            className='radioBtn'
            label={i.label}
            type='radio'
            name='radioForm'
            value={i.value}
            onChange={(e) => onValueChange(e.target.value)}
          />
        ))}
        <Input onChange={(e) => onValueChange(e / 100)} placeholder='Custom' />
      </div>
    </>
  );
};

Radio.propTypes = {
  keys: PropTypes.instanceOf(Array),
  onChange: PropTypes.func,
};

Radio.defaultProps = {
  keys: [],
  onChange: () => {},
};

export default Radio;
