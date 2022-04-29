import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/common/loader'
import { getUsersDataLoadedStatus, searchUsers } from '../store/users'

const UsersLoader = ({ children }) => {
	const dispatch = useDispatch()
	const dataLoaded = useSelector(getUsersDataLoadedStatus())

	useEffect(() => {
		if (!dataLoaded) {
			dispatch(searchUsers('a', 1))
		}
	}, [dataLoaded])

	return !dataLoaded ? <Loader /> : children
}

export default UsersLoader
