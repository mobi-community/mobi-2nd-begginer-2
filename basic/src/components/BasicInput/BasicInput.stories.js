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
