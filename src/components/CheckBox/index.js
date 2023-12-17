import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ReactComponent as Checked } from 'asset/checked.svg'
import { ReactComponent as NonChecked } from 'asset/nonChecked.svg'
import { useState } from 'react'

const CheckBox = ({ label, checked, id, size, fontSize, ...checkBoxProps }) => {
	const [isChecked, setIsChecked] = useState(checked)

	const isClickChecked = () => {
		setIsChecked(!isChecked)
	}

	return (
		<S.CheckBoxArea>
			<input id={id} {...checkBoxProps} />
			{isChecked ? (
				size == 'small' ? (
					<NonChecked onClick={isClickChecked} />
				) : size == 'medium' ? (
					<MediumNonChecked onClick={isClickChecked} />
				) : (
					<LargeNonChecked onClick={isClickChecked} />
				)
			) : size == 'small' ? (
				<Checked onClick={isClickChecked} />
			) : size == 'medium' ? (
				<MediumChecked onClick={isClickChecked} />
			) : (
				<LargeChecked onClick={isClickChecked} />
			)}
			<S.Label htmlFor={id} fontSize={fontSize}>
				{label}
			</S.Label>
		</S.CheckBoxArea>
	)
}

export default CheckBox

const CheckBoxArea = styled.div`
	display: flex;
	align-items: center;
	& input {
		display: none;
	}

	& label {
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
	}
`
const MediumNonChecked = styled(NonChecked)`
	width: 30px;
	height: 30px;
`
const LargeNonChecked = styled(NonChecked)`
	width: 40px;
	height: 40px;
`

const MediumChecked = styled(Checked)`
	width: 30px;
	height: 30px;
`
const LargeChecked = styled(Checked)`
	width: 40px;
	height: 40px;
`

const Label = styled.label`
	padding-left: 10px;
	font-size: ${({ fontSize }) => (fontSize ? fontSize : 10)}px;
`

const S = {
	CheckBoxArea,
	Label,
}

CheckBox.propTypes = {
	size: PropTypes.oneOf(['small', 'medium', 'large']),

	checked: PropTypes.bool,

	label: PropTypes.string,

	fontSize: PropTypes.number,
}
