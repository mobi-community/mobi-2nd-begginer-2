import Tab from '.'
import { navbarList } from 'pages'
export default {
	title: 'Components/Tab',
	component: Tab,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'], //문서
}

export const Primary = {
	args: {
		data: navbarList,
		primary: true,
	},
}

export const Secondary = {
	args: {
		data: navbarList,
		primary: false,
	},
}
