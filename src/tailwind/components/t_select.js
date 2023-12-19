import PropTypes from 'prop-types'
import React from 'react';

const T_Select = ({children}) => {
    return (
    <>
        <select class="bg-grey-100 shadow-drop rounded-[3px] w-[112px] h-[48px] focus:outline-none hover:shadow-inner">
            {children}
        </select>
    </>
    )
}
export default T_Select;

T_Select.propTypes = {
    children: React.ReactNode,
};