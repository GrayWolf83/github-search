import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchUsers } from '../../store/users'

const SearchBar = () => {
	const [search, setSearch] = useState('')
	const dispatch = useDispatch()

	const handleClick = () => {
		if (search.trim()) {
			dispatch(searchUsers(search.trim(), 1))
			setSearch('')
		}
	}

	const handleChange = (e) => {
		setSearch(e.target.value)
	}

	return (
		<div className='input-group mb-3'>
			<input
				type='text'
				className='form-control'
				placeholder='Введите имя пользователя'
				aria-label="Recipient's username"
				aria-describedby='button-addon2'
				onChange={handleChange}
				value={search}
			/>
			<button
				className='btn btn-outline-dark'
				type='button'
				onClick={handleClick}
				id='button-addon2'>
				Button
			</button>
		</div>
	)
}

export default SearchBar
