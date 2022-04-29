import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/ui/navbar'

const Main = () => {
	return (
		<>
			<Navbar />
			<div className='container mt-3'>
				<Outlet />
			</div>
		</>
	)
}

export default Main
