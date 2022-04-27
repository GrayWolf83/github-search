import React from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/common/back-button'

const User = () => {
	const { login } = useParams()

	return (
		<>
			<BackButton />
			<h1>{login}</h1>
		</>
	)
}

export default User
