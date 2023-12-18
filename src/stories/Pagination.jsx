import React from 'react';
import PropTypes from 'prop-types';

export const Pagination = ({ onClick, ...props}) => {
    return (
        <button type='button' onClick={() => {console.log('clicked!')}} {...props}>1</button>
    )
};

Pagination.propTypes = {
    onClick: PropTypes.func,
};
Pagination.defaultProps = {
    onClick: undefined,
  };