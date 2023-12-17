import { styled, css } from 'styled-components'
import { flexCenter } from 'style/common'

const InputBox = styled.div`
	width: ${({ width }) => (width ? width : 300)}px;
	height: ${({ height }) => (height ? height : 50)}px;
	display: grid;
	grid-template-columns: 1fr 4fr;
`

const Label = styled.label`
	${flexCenter};
	font-size: ${({ labelSize }) => (labelSize ? labelSize : 15)}px;
	padding: 10px;
`

const variantCSS = {
	primary: css`
		background-color: ${({ theme }) => theme.COLORS.white};
		color: ${({ theme }) => theme.COLORS['black']};
		border: 3px solid ${({ theme }) => theme.COLORS['line']};
	`,

	secondary: css`
		background-color: ${({ theme }) => theme.COLORS.gray[200]};
		color: ${({ theme }) => theme.COLORS['white']};
		border: 3px solid ${({ theme }) => theme.COLORS['white']};
	`,
}

const Input = styled.input`
	${({ primary }) =>
		primary ? variantCSS['primary'] : variantCSS['secondary']}
	border-radius: 10px;
	font-size: ${({ fontSize }) => (fontSize ? fontSize : 15)}px;
	padding: 10px;
`

export const S = {
	InputBox,
	Label,
	Input,
}
