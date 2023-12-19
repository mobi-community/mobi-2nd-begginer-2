import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ReactComponent as Checked } from 'asset/checked.svg'
import { ReactComponent as NonChecked } from 'asset/nonChecked.svg'
import { useEffect, useState } from 'react'
import { S } from './style'

const CheckBox = ({ label, checked, id, size, ...checkBoxProps }) => {
	const [isChecked, setIsChecked] = useState(checked)

	useEffect(() => {
		setIsChecked(!isChecked)
	}, [checked])

	const isClickChecked = () => {
		setIsChecked(!isChecked)
	}

	return (
		<S.CheckBoxArea>
			<input id={id} {...checkBoxProps} />
			{isChecked ? (
				<S.SizeChecked onClick={isClickChecked} size={size} />
			) : (
				<S.SizeNonChecked onClick={isClickChecked} size={size} />
			)}
			<S.Label htmlFor={id} size={size}>
				{label}
			</S.Label>
		</S.CheckBoxArea>
	)
}

export default CheckBox

CheckBox.propTypes = {
	size: PropTypes.oneOf(['small', 'medium', 'large']),

	checked: PropTypes.bool,

	label: PropTypes.string,

	fontSize: PropTypes.number,
}
