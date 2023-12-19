import { css, styled } from 'styled-components'
import { flexCenter } from '../../style/common'

const variantCSS = {
	primary: css`
		background-color: ${({ theme }) => theme.COLORS.primary['light_blue']};
		color: ${({ theme }) => theme.COLORS['white']};
		&:hover {
			background-color: ${({ theme }) => theme.COLORS.primary['blue']};
		}
	`,

	secondary: css`
		background-color: ${({ theme }) => theme.COLORS.primary['mint']};
		color: ${({ theme }) => theme.COLORS['white']};

		&:hover {
			background-color: ${({ theme }) => theme.COLORS.primary['dark_mint']};
		}
	`,
}

const badgeVariantCSS = {
	default: css`
		background-color: ${({ theme }) => theme.COLORS['mint']};
	`,
	warn: css`
		background-color: ${({ theme }) => theme.COLORS['warn']};
	`,
	alert: css`
		background-color: ${({ theme }) => theme.COLORS['error']};
	`,
}

const sizeCSS = {
	small: css`
		width: 64px;
		height: 32px;
		padding: 16px 0;
	`,

	medium: css`
		width: 96px;
		height: 48px;
		padding: 16px 0;
	`,
	large: css`
		width: 128px;
		height: 64px;
		padding: 16px 0;
	`,
}

const fontSizeCSS = {
	small: css`
		font-size: ${({ theme }) => theme.FONT_SIZE.x_small};
	`,
	medium: css`
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	`,
	large: css`
		font-size: ${({ theme }) => theme.FONT_SIZE.x_large};
	`,
}

const shapeCSS = {
	default: css`
		border-radius: 0px;
	`,
	shape: css`
		border-radius: 8px;
	`,
	round: css`
		border-radius: 24px;
	`,
}

const Button = styled.button`
	${({ variant }) =>
		variant == 'primary' ? variantCSS['primary'] : variantCSS['secondary']}
	${({ shape }) => shapeCSS[shape]}
    ${({ size }) => sizeCSS[size]}
	${({ fontSize }) => fontSizeCSS[fontSize]}
	border : ${({ border }) => (border ? '3px solid white' : 'none')};
	cursor: pointer;
	font-weight: 800;
	${flexCenter}
	position: relative;
`

const Badge = styled.div`
	min-width: 33px;
	min-height: 33px;
	padding: 5px;
	border-radius: 50%;
	position: absolute;
	top: -10px;
	right: -10px;
	${({ type }) => badgeVariantCSS[type]};
`

export const S = {
	Button,
	Badge,
}
