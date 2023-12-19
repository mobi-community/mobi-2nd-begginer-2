import { styled, css } from 'styled-components'
import { flexCenter } from 'style/common'

/*인풋 사이즈 토큰*/
const sizeCSS = {
	small: css`
		width: 200px;
		height: 50px;
		padding: 8px 0;
	`,

	medium: css`
		width: 300px;
		height: 55px;
		padding: 10px 0;
	`,
	large: css`
		width: 400px;
		height: 60px;
		padding: 12px 0;
	`,

	full: css`
		width: 100%;
		height: 60px;
		padding: 12px 0;
	`,
}

/*폰트 사이즈 토큰*/
const fontSizeCSS = {
	small: css`
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
	`,
	medium: css`
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	`,
	large: css`
		font-size: ${({ theme }) => theme.FONT_SIZE.large};
	`,
	full: css`
		font-size: ${({ theme }) => theme.FONT_SIZE.large};
	`,
}

/*테마 색상 토큰*/
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

const InputBox = styled.div`
	display: grid;
	grid-template-columns: 1fr 4fr;
`

const Label = styled.label`
	${flexCenter};
	${({ size }) => (size ? fontSizeCSS[size] : fontSizeCSS['medium'])}
`

const Input = styled.input`
	${({ primary }) =>
		primary ? variantCSS['primary'] : variantCSS['secondary']}
	${({ size }) => (size ? sizeCSS[size] : sizeCSS['medium'])}
	${({ size }) => (size ? fontSizeCSS[size] : fontSizeCSS['medium'])}
	border-radius: 10px;
	padding: 10px;
`

export const S = {
	InputBox,
	Label,
	Input,
}
