import React from 'react';
import PropTypes from 'prop-types';

const Button = props =>
  (
    <button
      className={props.className}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
