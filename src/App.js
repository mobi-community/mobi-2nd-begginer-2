import './App.css'
import { ThemeProvider } from 'styled-components'
import theme from './style/theme'
import SignUpForm from './pages'
import GlobalStyles from 'style/global'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<SignUpForm />
		</ThemeProvider>
	)
}

export default App
