import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/user.service'

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		entities: null,
		currentUser: null,
		isLoading: true,
		error: null,
	},
	reducers: {
		loadRequested: (state) => {
			state.isLoading = true
		},
		loadUsersReceived: (state, action) => {
			state.entities = action.payload
			state.isLoading = false
		},
		loadCurrentUserReceived: (state, action) => {
			state.currentUser = action.payload
			state.isLoading = false
		},
		loadRequestFailed: (state, action) => {
			state.error = action.payload
			state.isLoading = false
		},
		errorCleared: (state) => {
			state.error = null
		},
	},
})

const { reducer: usersReducer, actions } = usersSlice
const {
	loadRequested,
	loadUsersReceived,
	loadCurrentUserReceived,
	loadRequestFailed,
	errorCleared,
} = actions

export const searchUsers = (search, page) => async (dispatch) => {
	dispatch(loadRequested())
	try {
		const { items } = await userService.searchUsers(search, page)
		dispatch(loadUsersReceived(items))
	} catch (error) {
		dispatch(loadRequestFailed(error.message))
	}
}

export const loadCurrentUser = (login) => async (dispatch) => {
	try {
		const { items } = await userService.getUser(login)
		dispatch(loadCurrentUserReceived(items))
	} catch (error) {
		dispatch(loadRequestFailed(error.message))
	}
}

export const getUsers = () => (state) => {
	return state.users.entities
}
export const getCurrentUser = () => (state) => {
	return state.users.currentUser
}
export const clearError = () => (dispatch) => dispatch(errorCleared())
export const getUsersLoadingStatus = () => (state) => state.users.isLoading
export const getErrors = () => (state) => state.users.error

export default usersReducer
