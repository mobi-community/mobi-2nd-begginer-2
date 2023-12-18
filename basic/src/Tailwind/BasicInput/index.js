import PropTypes from 'prop-types'

export const fontSizeCSS = {
	small: 'text-md',
	medium: 'text-lg',
	large: 'text-xl',
	full: 'text-xl',
}

const TWBasicInput = ({ variant, size, label, placeholder }) => {
	const sizeCSS = {
		small: 'w-[300px]',
		medium: 'w-[400px] ',
		large: 'w-[500px] ',
		full: 'w-full',
	}

	const variantCSS = {
		primary: 'border-solid border-line placeholder-gray-300 bg-white',
		secondary: 'border-solid border-white placeholder-white bg-gray-200',
	}

	const selectedSizeCss = `${sizeCSS[size]} ${fontSizeCSS[size]}`
	const selectedFontSizeCss = `${fontSizeCSS[size]}`

	return (
		<>
			<div className={`${selectedSizeCss} flex items-center`}>
				<div className={`pr-5 ${selectedFontSizeCss}`}>{label}</div>
				<input
					className={`${variantCSS[variant]} border-[4px] w-full p-[10px] rounded-2xl`}
					placeholder={placeholder}
				/>
			</div>
		</>
	)
}

export default TWBasicInput

TWBasicInput.propTypes = {
	/**
	 * 버튼의 테마색
	 */
	variant: PropTypes.oneOf(['primary', 'secondary']),
	/**
	 * 라벨의 이름
	 */
	label: PropTypes.string,
	/**
	 * 미리보기 텍스트
	 */
	placeholder: PropTypes.string,
	/**
	 * size
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
}
