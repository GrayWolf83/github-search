import React from 'react'
import { Link } from 'react-router-dom'

const UsersListItem = ({ user }) => {
	return (
		<div className='card h-100 bg-dark text-light'>
			<img
				src={user.avatar_url}
				className='rounded-circle mx-auto mt-2 w-75'
				alt=''
			/>
			<div className='card-body d-flex flex-column justify-content-between'>
				<h3 className='card-title fs-5'>{user.login}</h3>
				<Link
					to={`user/${user.login}`}
					className='btn btn-outline-light w-100 mt-2'>
					Подробнее
				</Link>
			</div>
		</div>
	)
}

export default UsersListItem
