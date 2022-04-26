import { Routes, Route } from 'react-router-dom'
import UsersLoader from './hoc/useUsersLoader'
import Main from './layouts/main'
import Home from './pages/home'
import User from './pages/user'

function App() {
	return (
		<UsersLoader>
			<Routes>
				<Route path='/' element={<Main />}>
					<Route index element={<Home />} />
					<Route path='user/:login' element={<User />} />
				</Route>
			</Routes>
		</UsersLoader>
	)
}

export default App
