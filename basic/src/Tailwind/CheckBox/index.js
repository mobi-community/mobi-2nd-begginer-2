import { useState } from 'react'
import { ReactComponent as Checked } from 'asset/checked.svg'
import { ReactComponent as NonChecked } from 'asset/nonChecked.svg'
import PropTypes from 'prop-types'
import { fontSizeCSS } from 'Tailwind/BasicInput'

const TwCheckBox = ({ id, label, size }) => {
	const [isChecked, setIsChecked] = useState(false)

	const isClickChecked = () => {
		setIsChecked(!isChecked)
	}

	const sizeCSS = {
		small: 'h-[30px]',
		medium: 'h-[30px]',
		large: 'h-[30px] ',
	}

	const selectedSizeCss = `${sizeCSS[size]} ${fontSizeCSS[size]}`

	return (
		<div className="flex items-center">
			<input id={id} className="hidden" />
			{isChecked ? (
				<Checked onClick={isClickChecked} className={`${sizeCSS[size]}`} />
			) : (
				<NonChecked onClick={isClickChecked} className={`${sizeCSS[size]}`} />
			)}
			<label htmlFor={id} className={`pl-4 ${selectedSizeCss}`}>
				{label}
			</label>
		</div>
	)
}

export default TwCheckBox

TwCheckBox.propTypes = {
	/**
	 * 라벨의 이름
	 */
	label: PropTypes.string,
	/**
	 * size
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
}
