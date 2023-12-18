import { useState } from 'react'
import PropTypes from 'prop-types'
import { S } from './style'
import { navbarList } from 'pages'

const Tab = ({ data, primary }) => {
	//데이터의 id가 들어감
	const [selectId, setSelectId] = useState()

	const onClickSelect = id => {
		setSelectId(id)
	}

	return (
		<S.Wrapper>
			{navbarList.map(item => (
				<S.TabWrapper
					onClick={() => {
						onClickSelect(item.id)
					}}
					primary={primary}
					id={item.id}
					selectId={selectId}
				>
					{item.id == selectId && <S.Circle primary={primary} />}
					<S.Text id={item.id} selectId={selectId} primary={primary}>
						{item.title}
					</S.Text>
				</S.TabWrapper>
			))}
		</S.Wrapper>
	)
}
export default Tab

Tab.PropTypes = {
	/**
	 * 내부 데이터
	 */
	data: PropTypes.array,
	/**
	 * primary
	 */
	primary: PropTypes.bool,
}
