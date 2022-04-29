import React from 'react'
import { useSelector } from 'react-redux'
import {
	getPage,
	getUsersCount,
	getUsersList,
	getUsersSearchValue,
	searchUsers,
} from '../../store/users'
import Pagination from '../common/pagination'
import UsersListItem from './users-list-item'

const UsersList = () => {
	const page = useSelector(getPage())
	const usersCount = useSelector(getUsersCount())
	const search = useSelector(getUsersSearchValue())
	const users = useSelector(getUsersList())

	return (
		<div className='row'>
			{users?.length ? (
				<>
					{users.map((user) => (
						<div
							className='col-6 col-md-4 col-lg-3 mb-2'
							key={user.login}>
							<UsersListItem user={user} />
						</div>
					))}
					<Pagination
						items={users}
						page={page}
						count={usersCount}
						value={search}
						perPage={8}
						cb={searchUsers}
					/>
				</>
			) : (
				<p className='text-center'>
					По Вашему запросу ничего не найдено
				</p>
			)}
		</div>
	)
}

export default UsersList
