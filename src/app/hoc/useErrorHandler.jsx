import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { clearUsersError, getUsersErrors } from '../store/users'

const ErrorHandler = ({ children }) => {
	const error = useSelector(getUsersErrors())
	const dispatch = useDispatch()

	useEffect(() => {
		if (error) {
			toast.error(error)
			dispatch(clearUsersError())
		}
	})

	return children
}

export default ErrorHandler
