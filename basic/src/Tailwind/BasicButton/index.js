import Badge from './Badge'
import PropTypes from 'prop-types'

const TWBasicButton = ({ varaint, size, shape, children }) => {
	const variantCSS = {
		primary: `bg-mint hover:bg-dark-mint text-white`,
		secondary: 'text-white bg-light-blue hover:bg-blue',
	}

	const sizeCSS = {
		small: 'w-[64px] h-[32px] py-4',
		medium: 'w-[96px] h-[48px] py-4',
		large: 'w-[128px] h-[64px] py-4',
	}

	const shapeCSS = {
		default: 'rounded-none',
		shape: 'rounded-lg',
		round: 'rounded-3xl',
	}

	return (
		<div className="flex p-5 gap-10">
			{/*small*/}
			<div className="relative">
				<button
					className={`bg-mint ${variantCSS[varaint]} ${sizeCSS[size]} ${shapeCSS[shape]} flex justify-center content-center p-2 font-extrabold cursor-pointer`}
				>
					{children}
				</button>
				<Badge />
			</div>
		</div>
	)
}

export default TWBasicButton

TWBasicButton.propTypes = {
	/**
	 * 버튼의 테마색
	 */
	varaint: PropTypes.oneOf(['primary', 'secondary']),
	/**
	 * 모양
	 */
	shape: PropTypes.oneOf(['default', 'shape', 'round']),
	/**
	 * size
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	/**
	 * 모양
	 */
	children: PropTypes.string,
}
