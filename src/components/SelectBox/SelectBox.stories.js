import SelectBox from '.'

export default {
	title: 'Components/SelectBox',
	component: SelectBox,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'], //문서
}

const defaultArgs = {
	data: ['option1', 'option2', 'option3', 'option4'],
}

export const Large = {
	args: {
		...defaultArgs,
		data: ['2023-11-13', '2023-11-14', '2023-11-15'],
		size: 'large',
	},
}

export const Medium = {
	args: {
		...defaultArgs,
		data: ['2023-11-13', '2023-11-14', '2023-11-15'],
		size: 'medium',
	},
}

export const Small = {
	args: {
		...defaultArgs,
		data: ['남자', '여자'],
		size: 'small',
	},
}
