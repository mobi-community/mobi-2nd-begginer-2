/** @type { import('@storybook/react').Preview } */
import { ThemeProvider } from 'styled-components'
import theme from '../src/style/theme'
import GlobalStyles from 'style/global'

const preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export const decorators = [
	Story => (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Story />
		</ThemeProvider>
	),
]

export default preview
