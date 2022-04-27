import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	getPage,
	getUsersCount,
	getUsersSearchValue,
	searchUsers,
} from '../../store/users'

const Pagination = () => {
	const dispatch = useDispatch()
	const page = useSelector(getPage())
	const usersCount = useSelector(getUsersCount())
	const search = useSelector(getUsersSearchValue())

	const pagesCount = usersCount >= 1000 ? 125 : Math.ceil(usersCount / 8)

	const handleClick = (direction) => {
		if (direction === 'right') {
			dispatch(searchUsers(search, page + 1))
		}
		if (direction === 'left') {
			dispatch(searchUsers(search, page - 1))
		}
	}

	return (
		<div className='w-100 my-2 d-flex justify-content-center'>
			<button
				className='btn btn-dark shadow py-1 me-3'
				onClick={() => handleClick('left')}
				disabled={page === 1}>
				{'<<'}
			</button>

			<span className='me-3 fw-bold ff-pattaya fs-5'>
				{page + ' / ' + pagesCount}
			</span>

			<button
				className='btn btn-dark shadow py-1'
				onClick={() => handleClick('right')}
				disabled={page === pagesCount}>
				{'>>'}
			</button>
		</div>
	)
}

export default Pagination
