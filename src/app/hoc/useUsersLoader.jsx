import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/common/loader'
import {
	getUsersDataLoadedStatus,
	getUsersList,
	searchUsers,
} from '../store/users'

const UsersLoader = ({ children }) => {
	const dispatch = useDispatch()
	const dataLoaded = useSelector(getUsersDataLoadedStatus())
	const users = useSelector(getUsersList())

	useEffect(() => {
		if (!users) {
			dispatch(searchUsers('a', 1))
		}
	}, [users, dispatch])

	return !dataLoaded ? <Loader /> : children
}

export default UsersLoader
