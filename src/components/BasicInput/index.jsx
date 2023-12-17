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
	 * 버튼의 테마색
	 */
	primary: PropTypes.bool,
	/**
	 * 인풋 박스 전체의 너비
	 */
	width: PropTypes.number,
	/**
	 * 인풋 박스 전체의 높이
	 */
	height: PropTypes.number,
	/**
	 * 라벨의 이름
	 */
	label: PropTypes.numb,
	/**
	 * 라벨의 이름
	 */
	labelSize: PropTypes.string,
	/**
	 * 미리보기 텍스트
	 */
	placeholder: PropTypes.string,
	/**
	 * 폰트 사이즈
	 */
	fontSize: PropTypes.number,
}

export default BasicInput
