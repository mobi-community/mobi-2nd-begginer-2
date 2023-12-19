import styled, { css } from 'styled-components'
import { flexCenter } from 'style/common'
const sizeCSS = {
	small: css`
		width: 600px;
	`,
	medium: css`
		width: 500px;
	`,
	large: css`
		width: 400px;
	`,
}
const buttonSizeCSS = {
	small: css`
		width: 20px;
		height: 20px;
		font-size: 12px;
	`,
	medium: css`
		width: 30px;
		height: 30px;
		font-size: 15px;
	`,
	large: css`
		width: 40px;
		height: 40px;
		font-size: 25px;
	`,
}

const shapeCSS = {
	shape: css`
		border-radius: 8px;
	`,
	round: css`
		border-radius: 50%;
	`,
}

const Wrapper = styled.div`
	${({ size }) => sizeCSS[size]}
	height: 100px;
	${flexCenter}
`

const Button = styled.button`
	${({ size }) => buttonSizeCSS[size]};
	${({ shape }) => shapeCSS[shape]}
	background-color: ${({ isFocus, color }) => (isFocus ? color : 'white')};
	color: ${({ isFocus }) => (isFocus ? 'white' : 'black')};
	font-weight: 400;
	cursor: pointer;
`

export const S = {
	Wrapper,
	Button,
}
