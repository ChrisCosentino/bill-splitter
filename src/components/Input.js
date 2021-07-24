import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, icon, placeholder, onChange, value }) => {
  return (
    <>
      {label && <label className='inputLabel'>{label}</label>}
      <div className='InputContainer'>
        {icon && <img src={icon} alt='icon' className='Icon' />}
        <input
          type='number'
          className='Input'
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
      </div>
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  label: null,
  icon: null,
  placeholder: '',
};

export default Input;
