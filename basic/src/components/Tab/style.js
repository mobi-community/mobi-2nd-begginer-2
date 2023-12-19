import styled, { css } from 'styled-components'

const variantCSS = {
	primary: css`
		color: ${({ id, selectId, theme }) =>
			id == selectId ? theme.COLORS.primary.blue : 'black'};
	`,

	secondary: css`
		color: ${({ id, selectId, theme }) =>
			id == selectId ? theme.COLORS.primary.mint : 'black'};
	`,
}

const borderVariantCSS = {
	primary: css`
		border-bottom: ${({ id, selectId, theme }) =>
			id == selectId ? `3px solid ${theme.COLORS.primary.blue}` : 'none'};
	`,

	secondary: css`
		border-bottom: ${({ id, selectId, theme }) =>
			id == selectId ? `3px solid ${theme.COLORS.primary.mint}` : 'none'};
	`,
}

const circleVariantCSS = {
	primary: css`
		background-color: ${({ theme }) => theme.COLORS.primary.blue};
	`,
	secondary: css`
		background-color: ${({ theme }) => theme.COLORS.primary.mint};
	`,
}

const Wrapper = styled.div`
	width: 1000px;
	display: flex;
	height: 50px;
`

const Text = styled.div`
	font-size: 20px;
	font-weight: ${({ id, selectId }) => (id == selectId ? 700 : 400)};
	${({ variant }) => variantCSS[variant]}
	padding-left: 30px;
`

const TabWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100px;
	${({ variant }) => borderVariantCSS[variant]}
	position: relative;
`

const Circle = styled.div`
	${({ variant }) => circleVariantCSS[variant]}
	width: 6px;
	height: 6px;
	border-radius: 50%;
	position: absolute;
	left: 15px;
`

export const S = {
	Wrapper,
	TabWrapper,
	Text,
	Circle,
}
