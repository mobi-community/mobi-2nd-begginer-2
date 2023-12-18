import { useState } from 'react'
import { ReactComponent as DownArrow } from 'asset/downArrow.svg'
import { ReactComponent as UpArrow } from 'asset/upArrow.svg'
import PropTypes from 'prop-types'

const TWSelectBox = ({ size }) => {
	const optionList = ['option1', 'option2', 'option3', 'option4']
	const [currentSelect, setCurrentSelect] = useState(optionList[0])
	const [isOpen, setIsOpen] = useState(false)
	const onToggleSelect = () => {
		setIsOpen(!isOpen)
	}

	const sizeWidthCSS = {
		small: 'w-[100px]',
		medium: 'w-[150px]',
		large: 'w-[200px]',
	}

	const sizeHeightCSS = {
		small: 'h-[40px]',
		medium: 'h-[50px]',
		large: 'h-[60px]',
	}

	const fontSizeCSS = {
		small: 'text-md',
		medium: 'text-lg',
		large: 'text-xl',
		full: 'text-xl',
	}

	return (
		<div className={`${sizeWidthCSS[size]} ${fontSizeCSS[size]}`}>
			<div
				className={`${sizeWidthCSS[size]} ${sizeHeightCSS[size]} flex justify-between items-center p-[18px] w-full shadow-lg rounded-lg`}
				onClick={onToggleSelect}
			>
				<div>{currentSelect}</div>
				{isOpen ? (
					<UpArrow className={`${fontSizeCSS[size]}`} />
				) : (
					<DownArrow />
				)}
			</div>
			<div className="shadow-lg rounded-lg cursor-pointer">
				{isOpen &&
					optionList?.map(option => (
						<li
							className={`flex ${sizeHeightCSS[size]} list-none p-[8px] mx-[10px] border-b-2 border-line last:border-b-0`}
							onClick={() => {
								setCurrentSelect(option)
							}}
						>
							<button>{option}</button>
						</li>
					))}
			</div>
		</div>
	)
}

export default TWSelectBox

TWSelectBox.propTypes = {
	/**
	 * size
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
}
