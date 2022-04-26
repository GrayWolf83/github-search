import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, getUsersLoadingStatus, searchUsers } from '../store/users'

const UsersLoader = ({ children }) => {
	const dispatch = useDispatch()
	const isLoading = useSelector(getUsersLoadingStatus())
	const users = useSelector(getUsers())

	useEffect(() => {
		if (!users) {
			dispatch(searchUsers('a', 1))
		}
	}, [users, dispatch])

	return isLoading ? 'Loading' : children
}

export default UsersLoader
