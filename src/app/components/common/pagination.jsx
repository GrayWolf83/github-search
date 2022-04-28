import React from 'react'
import { useDispatch } from 'react-redux'

const Pagination = ({ page, count, value, cb, perPage }) => {
	const dispatch = useDispatch()
	const pagesCount = Math.ceil(
		count >= 1000 ? 1000 / perPage : count / perPage,
	)

	const handleClick = (direction) => {
		if (direction === 'right') {
			dispatch(cb(value, page + 1))
		}
		if (direction === 'left') {
			dispatch(cb(value, page - 1))
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
