import { S } from './style'
import PropTypes from 'prop-types'

const BasicInput = ({
	primary,
	width,
	height,
	label,
	placeholder,
	fontSize,
	labelSize,
	...InputProps
}) => {
	return (
		<S.InputBox height={height} width={width}>
			<S.Label labelSize={labelSize}>{label}</S.Label>
			<S.Input
				primary={primary}
				placeholder={placeholder}
				fontSize={fontSize}
				{...InputProps}
			/>
		</S.InputBox>
	)
}

BasicInput.propTypes = {
	/**
	 * 인풋의 테마색
	 */
	primary: PropTypes.bool,
	/**
	 * 인풋의 사이즈
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
	/**
	 * 라벨의 이름
	 */
	label: PropTypes.string,
	/**
	 * 미리보기 텍스트
	 */
	placeholder: PropTypes.string,
}

export default BasicInput
