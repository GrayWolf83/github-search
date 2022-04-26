import React from 'react'
import { useSelector } from 'react-redux'
import { getUsers } from '../store/users'

const Home = () => {
	const users = useSelector(getUsers())

	console.log('users', users)

	return <h1>Home</h1>
}

export default Home
