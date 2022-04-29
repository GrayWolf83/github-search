import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DataLoader from './hooks/withDataLoader'
import Main from './layouts/main'
import Home from './pages/home'
import User from './pages/user'

function App() {
	return (
		<>
			<DataLoader>
				<Routes>
					<Route path='/' element={<Main />}>
						<Route index element={<Home />} />
						<Route path='user/:login' element={<User />} />
					</Route>
				</Routes>
			</DataLoader>
			<ToastContainer />
		</>
	)
}

export default App
