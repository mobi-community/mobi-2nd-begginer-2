import PropTypes from 'prop-types'
import { S } from './style'

const BasicButton = ({
	size,
	shape,
	variant,
	children,
	fontSize,
	border,
	badge,
	...rest
}) => {
	console.log('badge', badge)

	const { type, value } = badge
	return (
		<S.Button
			size={size}
			shape={shape}
			variant={variant}
			fontSize={fontSize}
			border={border}
			{...rest}
		>
			<S.Badge type={type}>{value}</S.Badge>
			{children}
		</S.Button>
	)
}

export default BasicButton

BasicButton.defaultProps = {
	size: 'medium',
	children: 'Button',
	border: false,
	fontSize: 12,
	variant: 'primary',
	badge: {
		type: 'alert',
		value: 100,
	},
}

//해당 컴포넌트에 필요한 props를 정리해놓은 것
//스토리북의 오른쪽 선택 탭
BasicButton.propTypes = {
	/**
	 * 버튼의 테마
	 */
	variant: PropTypes.oneOf(['primary', 'secondary']),
	/**
	 * 버튼의 크기
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	/**
	 * 버튼의 둥근 정도
	 */
	shape: PropTypes.oneOf(['default', 'shape', 'round']),
	/*
	 * 폰트 사이즈
	 */
	fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
	/*
	 * 버튼의 테두리
	 */
	border: PropTypes.bool,
	/*
	 * 버튼 안에 텍스트
	 */
	children: PropTypes.string,
	/*
	 * 버튼 안에 알림 배지
	 */
	badge: PropTypes.shape({
		value: PropTypes.number,
		type: PropTypes.oneOf(['warn', 'alert', 'default']),
	}),
}
