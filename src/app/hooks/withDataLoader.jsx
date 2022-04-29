import React from 'react'
import ErrorHandler from '../hoc/useErrorHandler'
import UsersLoader from '../hoc/useUsersLoader'

const DataLoader = ({ children }) => {
	return (
		<ErrorHandler>
			<UsersLoader>{children}</UsersLoader>
		</ErrorHandler>
	)
}

export default DataLoader
