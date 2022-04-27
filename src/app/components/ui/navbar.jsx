import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='navbar navbar-dark bg-dark shadow'>
			<div className='container'>
				<Link to='/'>
					<span className='navbar-brand mb-0 h1 ff-pattaya fs-3'>
						GitHub Search
					</span>
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
