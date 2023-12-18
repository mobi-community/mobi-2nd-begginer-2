import './App.css'
import { ThemeProvider } from 'styled-components'
import theme from './style/theme'
import SignUpForm from './pages'
import GlobalStyles from 'style/global'
import 'tailwindcss/tailwind.css'
import TailwindPage from 'pages/TailwindPage'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<SignUpForm />
			<TailwindPage />
		</ThemeProvider>
	)
}

export default App
