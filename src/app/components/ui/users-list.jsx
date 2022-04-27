import React from 'react'
import { useSelector } from 'react-redux'
import { getUsersList } from '../../store/users'
import Loader from '../common/loader'
import UsersListItem from './users-list-item'

const UsersList = () => {
	const users = useSelector(getUsersList())

	return (
		<div className='row'>
			{users ? (
				users.map((user) => (
					<div
						className='col-6 col-md-4 col-lg-3 mb-2'
						key={user.login}>
						<UsersListItem user={user} />
					</div>
				))
			) : (
				<Loader />
			)}
		</div>
	)
}

export default UsersList
