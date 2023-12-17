import BasicInput from '.'

export default {
	title: 'Components/BasicInput',
	component: BasicInput,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'], //문서
}

const defaultArgs = {
	label: '아이디',
}

export const Primary = {
	args: {
		...defaultArgs,
		primary: true,
	},
}

export const Secondary = {
	args: {
		...defaultArgs,
		primary: false,
	},
}

// primary: PropTypes.bool,
// /**
//  * 인풋 박스 전체의 너비
//  */
// width: PropTypes.number,
// /**
//  * 인풋 박스 전체의 높이
//  */
// height: PropTypes.number,
// /**
//  * 라벨의 이름
//  */
// label: PropTypes.string,
// /**
//  * 미리보기 텍스트
//  */
// placeholder: PropTypes.string,
// /**
//  * 폰트 사이즈
//  */
// fontSize: PropTypes.number,
