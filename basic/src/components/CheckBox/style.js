import styled, { css } from 'styled-components'
import { ReactComponent as Checked } from 'asset/checked.svg'
import { ReactComponent as NonChecked } from 'asset/nonChecked.svg'

const sizeCSS = {
	small: css`
		width: 20px;
		height: 20px;
	`,

	medium: css`
		width: 30px;
		height: 30px;
	`,
	large: css`
		width: 40px;
		height: 40px;
	`,
}

const fontSizeCSS = {
	small: css`
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
	`,
	medium: css`
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	`,
	large: css`
		font-size: ${({ theme }) => theme.FONT_SIZE.x_large};
	`,
}

const CheckBoxArea = styled.div`
	display: flex;
	align-items: center;
	& input {
		display: none;
	}
`

const SizeNonChecked = styled(NonChecked)`
	${({ size }) => sizeCSS[size]}
`
const SizeChecked = styled(Checked)`
	${({ size }) => sizeCSS[size]}
`

const Label = styled.label`
	padding-left: 10px;
	${({ size }) => fontSizeCSS[size]}
`
export const S = {
	CheckBoxArea,
	SizeNonChecked,
	SizeChecked,
	Label,
}
