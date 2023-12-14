import logo from './logo.svg'
import './App.css'
import { ThemeProvider } from 'styled-components'
import theme from './style/theme'
import SignUpForm from './pages'
function App() {
	return (
		<ThemeProvider theme={theme}>
			<SignUpForm />
		</ThemeProvider>
	)
}

export default App
