import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/user.service'

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		entities: null,
		currentUser: null,
		currentUserRepos: null,
		isLoading: true,
		error: null,
		dataLoaded: false,
		page: 1,
		reposPage: 1,
		search: 'a',
		usersCount: 0,
	},
	reducers: {
		loadRequested: (state) => {
			state.isLoading = true
		},
		loadUsersReceived: (state, action) => {
			state.entities = action.payload.entities
			state.dataLoaded = true
			state.page = action.payload.page
			state.search = action.payload.search
			state.usersCount = action.payload.usersCount
			state.isLoading = false
		},
		loadCurrentUserReceived: (state, action) => {
			state.currentUser = action.payload
			state.isLoading = false
		},
		loadCurrentUserReposReceived: (state, action) => {
			state.currentUserRepos = action.payload.entities
			state.reposPage = action.payload.page
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
	loadCurrentUserReposReceived,
} = actions

export const searchUsers = (search, page) => async (dispatch) => {
	dispatch(loadRequested())
	try {
		const data = await userService.searchUsers(search, page)
		dispatch(
			loadUsersReceived({
				entities: data.items,
				usersCount: data.total_count,
				search,
				page,
			}),
		)
	} catch (error) {
		dispatch(loadRequestFailed(error.message))
	}
}

export const loadCurrentUser = (login) => async (dispatch) => {
	try {
		const content = await userService.getUser(login)
		dispatch(loadCurrentUserReceived(content))
	} catch (error) {
		dispatch(loadRequestFailed(error.message))
	}
}

export const loadCurrentUserRepos = (login, page) => async (dispatch) => {
	dispatch(loadRequested())
	try {
		const data = await userService.getRepos(login, page)
		dispatch(
			loadCurrentUserReposReceived({
				entities: data,
				page,
			}),
		)
	} catch (error) {
		dispatch(loadRequestFailed(error.message))
	}
}

export const getUsersList = () => (state) => {
	return state.users.entities
}
export const getCurrentUser = () => (state) => {
	return state.users.currentUser
}
export const getCurrentUserRepos = () => (state) => {
	return state.users.currentUserRepos
}
export const getReposPage = () => (state) => {
	return state.users.reposPage
}
export const clearUsersError = () => (dispatch) => dispatch(errorCleared())
export const getUsersLoadingStatus = () => (state) => state.users.isLoading
export const getUsersDataLoadedStatus = () => (state) => state.users.dataLoaded
export const getUsersErrors = () => (state) => state.users.error
export const getPage = () => (state) => state.users.page
export const getUsersCount = () => (state) => state.users.usersCount
export const getUsersSearchValue = () => (state) => state.users.search

export default usersReducer
