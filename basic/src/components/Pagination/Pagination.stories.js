import Pagination from '.'
import { navbarList } from 'pages'
export default {
	title: 'Components/Pagination',
	component: Pagination,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'], //문서
}

const defaultArgs = {
	totalLength: 100,
	pagesPerGroup: 10,
	color: 'black',
	size: 'medium',
}

export const Primary = {
	args: {
		...defaultArgs,
	},
}
