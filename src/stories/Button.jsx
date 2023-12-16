import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ primary, size, label, img, ...props }) => {
  const mode = primary ? 'popup-button--purple' : 'popup-button--gray';
  return (
    <button
      type="button"
      className={['popup-button', `popup-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};


Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['smallCircle', 'largeCircle', 'Square']),
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  size: 'Square',
  onClick: undefined,
};
