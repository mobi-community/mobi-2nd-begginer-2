import PropTypes from 'prop-types'
import { S } from './style'
import { useState } from 'react'
import styled from 'styled-components'
import { flexCenter } from 'style/common'

const Pagination = ({ totalLength, pagesPerGroup, color, size, shape }) => {
	//useSearchParams => 쿼리스트링 추출 {page : 12 }
	//const [searchParams, setSearchParams] = useSearchParams()

	const perPage = 10
	const page = 1
	const totalPage = totalLength / perPage

	const [currentPage, setCurrentPage] = useState(1)

	//처음 페이지 이동 함수
	const onMoveStartPage = () => {
		setCurrentPage(1)
	}

	//마지막 페이지 이동 함수
	const onMoveLastPage = () => {
		setCurrentPage(totalPage)
	}

	//뒤로 가기 함수
	const onMoveNextPage = () => {
		if (currentPage !== totalPage) {
			setCurrentPage(prev => prev + 1)
		}
	}

	//앞으로 가기 함수
	const onMovePrevPage = () => {
		if (currentPage !== 1) {
			setCurrentPage(prev => prev - 1)
		}
	}

	//페이지 그룹을 바꿔주는 함수 => 현재 페이지가 바뀔 때마다 실행
	// useEffect(() => {
	// 	const newCurrentGroup = Math.ceil(currentPage / pagesPerGroup)
	// 	// searchParams.set('page', currentPage)
	// 	// setSearchParams(searchParams)
	// }, [currentPage])

	// useEffect(() => {
	// 	setCurrentPage(page)
	// }, [page])

	//해당 페이지로 이동하는 함수
	const onMoveTargetPage = pageNumber => {
		setCurrentPage(pageNumber)
	}

	const Buttons = Array(pagesPerGroup) //5
		.fill()
		.map((_, idx) => {
			const currentGroup = Math.ceil(currentPage / pagesPerGroup)
			const pageNumber = (currentGroup - 1) * pagesPerGroup + idx + 1
			// data가 없으면 얼리 리턴으로 버튼 생성 X
			if (totalLength > perPage * idx) return pageNumber
		})

	return (
		<S.Wrapper size={size}>
			<S.Button size={size} onClick={onMoveStartPage}>
				≪
			</S.Button>
			<S.Button size={size} onClick={onMovePrevPage}>
				＜
			</S.Button>
			{/*버튼들 현재 그룹 => 해당 버튼들만 보여주기*/}
			{Buttons.map(pageNumber => {
				if (!pageNumber) return
				return (
					<S.Button
						shape={shape}
						size={size}
						onClick={() => {
							onMoveTargetPage(pageNumber)
						}}
						isFocus={pageNumber === currentPage}
						color={color}
					>
						{pageNumber}
					</S.Button>
				)
			})}
			<S.Button size={size} onClick={onMoveNextPage}>
				＞
			</S.Button>
			<S.Button size={size} onClick={onMoveLastPage}>
				≫
			</S.Button>
		</S.Wrapper>
	)
}
export default Pagination

Pagination.propTypes = {
	size: PropTypes.oneOf(['small', 'medium', 'large']),

	color: PropTypes.string,

	totalLength: PropTypes.number,

	pagesPerGroup: PropTypes.number,

	shape: PropTypes.oneOf(['default', 'round']),
}
