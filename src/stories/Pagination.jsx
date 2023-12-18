import React from "react";
import PropTypes from "prop-types";

export const Pagination = ({ onClick, children, ...props }) => {
  return (
    <button
      type="button"
      onClick={() => {
        console.log("clicked!");
      }}
      {...props}
    >
      {children}
    </button>
  );
};

Pagination.propTypes = {
  onClick: PropTypes.func,
  children: React.ReactNode,
};
Pagination.defaultProps = {
  onClick: undefined,
  children: undefined,
};
