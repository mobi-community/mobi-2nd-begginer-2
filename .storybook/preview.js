import { ThemeProvider } from 'styled-components'
import theme from '../src/style/theme'

import React from 'react'

/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		//on + 정규식 : Action 탭에서 이벤트가 발생하는 것을 감지할 수 있음
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

//decorators -> styled-components 적용을 위해
export const decorators = [
	Story => (
		<ThemeProvider theme={theme}>
			<Story />
		</ThemeProvider>
	),
]

export default preview
