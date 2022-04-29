import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(-1)
	}

	return (
		<button className='btn btn-dark shadow' onClick={handleClick}>
			Назад
		</button>
	)
}

export default BackButton
