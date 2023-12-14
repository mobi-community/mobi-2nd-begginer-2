import styled, { css } from 'styled-components'
import { flexCenter } from '../../style/common'

const BasicButton = ({ size, shape, variant, children, ...rest }) => {
	return (
		<Button size={size} shape={shape} variant={variant} {...rest}>
			{children}
		</Button>
	)
}

export default BasicButton

const variantCSS = {
	primary: css`
		background-color: ${({ theme }) => theme.COLORS.primary['light_blue']};
		color: ${({ theme }) => theme.COLORS['white']};
		border: 1px solid white;

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

const sizeCSS = {
	small: css`
		width: 64px;
		height: 32px;
		padding: 16px 0;
		font-size: ${({ theme }) => theme.FONT_SIZE.x_small};
	`,

	medium: css`
		width: 96px;
		height: 48px;
		padding: 16px 0;
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	`,
	large: css`
		width: 128px;
		height: 64px;
		padding: 16px 0;
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	`,

	full: css`
		width: 100%;
		aspect-ratio: 8 / 1;
	`,
}

const shapeCSS = {
	default: css``,
	shape: css`
		border-radius: 8px;
	`,
	round: css`
		border-radius: 24px;
	`,
}

const Button = styled.button`
	${({ variant }) => variantCSS[variant]}
	${({ shape }) => shapeCSS[shape]}
    ${({ size }) => sizeCSS[size]}
    cursor: pointer;
	border: none;
	font-weight: 800;
	${flexCenter}
`
