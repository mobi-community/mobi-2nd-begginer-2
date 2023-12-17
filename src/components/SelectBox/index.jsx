import { useState } from 'react'
import { ReactComponent as DownArrow } from 'asset/downArrow.svg'
import { ReactComponent as UpArrow } from 'asset/upArrow.svg'
import { S } from './style'
import PropTypes from 'prop-types'

const SelectBox = ({ data, size }) => {
	const [currentSelect, setCurrentSelect] = useState(data[0])
	const [isOpen, setIsOpen] = useState(false)
	const onToggleSelect = () => {
		setIsOpen(!isOpen)
	}

	return (
		<S.SelectBoxWrapper size={size}>
			<S.InnerSelectBox onClick={onToggleSelect}>
				<div>{currentSelect}</div>
				{isOpen ? <UpArrow /> : <DownArrow />}
			</S.InnerSelectBox>
			<S.OptionListWrapper>
				{isOpen &&
					data?.map(option => (
						<S.OptionWrapper
							onClick={() => {
								setCurrentSelect(option)
							}}
						>
							<button>{option}</button>
						</S.OptionWrapper>
					))}
			</S.OptionListWrapper>
		</S.SelectBoxWrapper>
	)
}

export default SelectBox

SelectBox.PropTypes = {
	/**
	 * 내부 데이터
	 */
	data: PropTypes.array,
	/**
	 * 사이즈
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
}
