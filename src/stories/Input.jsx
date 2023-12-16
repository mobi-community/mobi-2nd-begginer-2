import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

export const Input = ({label,focus, ...props}) => {
    return(
        <>
        <label>{label}</label>
        <input  className={"input"} {...props} />
        </>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    focus: PropTypes.bool,
};

Input.defaultProps = {
    onClick: undefined,
    focus: false
}