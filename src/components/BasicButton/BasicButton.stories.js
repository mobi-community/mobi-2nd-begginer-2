import BasicButton from '.'

export default {
	title: 'Components/BasicButton',
	component: BasicButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'], //문서
	// argTypes: {
	// 	// title: { control: 'text' },
	// 	// fontSize: { control: 'number' },
	// },
}

const defaultArgs = {
	children: 'Button',
}

export const Primary = {
	args: {
		...defaultArgs,
		primary: true,
		size: 'small',
		fontSize: 'small',
	},
}

export const Secondary = {
	args: {
		...defaultArgs,
		primary: false,
		size: 'small',
		fontSize: 'small',
	},
}
