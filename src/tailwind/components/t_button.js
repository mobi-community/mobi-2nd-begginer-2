import PropTypes from 'prop-types'

const T_Button = ({variant, size, font, children,label, ...props}) => {
    const variantCSS = {
		purple: 'bg-purple-500 shadow-dropPurple hover:shadow-innerPurple focus:shadow-innerPurple',
		gray: 'bg-grey-100 shadow-drop hover:shadow-inner focus:shadow-inner',
	}
    const sizeCSS = {
        smCircle: 'w-12 h-12 rounded-full',
        lgCircle: 'w-20 h-20 rounded-full',
        Square: 'w-[274px] h-[80px] rounded-[30px]'
    }
    const fontCSS = {
        submit: 'font-light text-[28px]'
    }

    return <>
        <button className={`${variantCSS[variant]} ${sizeCSS[size]} ${fontCSS[font]}`} {...props}>
            {children}
        </button>
        <label>{label}</label>
    </>
}
export default T_Button;

T_Button.propTypes = {
    variant: PropTypes.oneOf(['purple', 'gray']),
    size: PropTypes.oneOf(['smCircle', 'lgCircle', 'Square']),
    label: PropTypes.string,
    font: PropTypes.string,
}