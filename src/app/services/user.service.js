import httpService from './http.service'

const userService = {
	getUser: async (login) => {
		const { data } = await httpService.get('users/' + login)
		return data
	},
	searchUsers: async (search, page) => {
		const { data } = await httpService.get(
			`search/users?q=${search}&per_page=8&page=${page}`,
		)

		return data
	},
	getRepos: async (login, page) => {
		const { data } = await httpService.get(
			`users/${login}/repos?per_page=4&page=${page}`,
		)
		return data
	},
}

export default userService
