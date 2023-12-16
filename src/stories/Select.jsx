import React from 'react';
import PropTypes from 'prop-types';
import './select.css';

export const Select = ({label, children, ...props}) => {
    return (
        <>
        <label>{label}</label>
        <select className={"select"} {...props}>{children}</select>
        </>
    )
}

Select.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    focus: PropTypes.bool,
    children: React.ReactNode
};
Select.defaultProps = {
    onClick: undefined,
    focus: false,
    children: undefined
};