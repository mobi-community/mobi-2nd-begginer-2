import CheckBox from '.'

export default {
	title: 'Components/CheckBox',
	component: CheckBox,
		layout: 'centered',
	},
	tags: ['autodocs'], //문서
}

const defaultArgs = {
	checked: false,
	label: '아이디 저장',
}

export const Small = {
	args: {
		...defaultArgs,
		fontSize: 15,
		size: 'small',
	},
}

export const Medium = {
	args: { ...defaultArgs, fontSize: 20, size: 'medium' },
}

export const Large = {
	args: { ...defaultArgs, fontSize: 25, size: 'large' },
}
