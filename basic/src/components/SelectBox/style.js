import { boxShadow } from 'style/common'
import styled, { css } from 'styled-components'

const sizeCSS = {
	small: css`
		width: 400px;
	`,

	medium: css`
		width: 150px;
	`,
	large: css`
		width: 100px;
	`,
}

const SelectBoxWrapper = styled.ul`
	${({ size }) => sizeCSS[size]}
`

const InnerSelectBox = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 15px;
	align-items: center;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.COLORS.white};
	height: 40px;
	width: 100%;
	font-size: 15px;
	${boxShadow}
`

const OptionListWrapper = styled.div`
	width: 100%;
	margin-top: 10px;
	background-color: ${({ theme }) => theme.COLORS.white};
	border-radius: 10px;
	:last-child {
		border-bottom: none;
	}
	${boxShadow}
`

const OptionWrapper = styled.li`
	padding: 10px;
	margin: 0 10px;
	border-bottom: 3px solid ${({ theme }) => theme.COLORS.gray[200]};
	cursor: pointer;

	& > button {
		font-size: 15px;
	}
`
export const S = {
	SelectBoxWrapper,
	InnerSelectBox,
	OptionListWrapper,
	OptionWrapper,
}
