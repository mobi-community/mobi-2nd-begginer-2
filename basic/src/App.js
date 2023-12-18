import './App.css'
import { ThemeProvider } from 'styled-components'
import theme from './style/theme'
//import SignUpForm from './pages'
import GlobalStyles from 'style/global'
import 'tailwindcss/tailwind.css'
import TailwindPage from 'pages/TailwindPage'
import Pagination from 'components/Pagination'
import Tab from 'components/Tab'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{/* <SignUpForm /> */}
			<TailwindPage />
			<Tab />
			<Pagination totalLength={300} pagesPerGroup={10} />
		</ThemeProvider>
	)
}

export default App
