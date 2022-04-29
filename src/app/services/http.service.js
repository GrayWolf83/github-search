import axios from 'axios'

const http = axios.create({
	baseURL: 'https://api.github.com/',
})

http.interceptors.request.use(
	function (config) {
		config.headers = {
			...config.headers,
			Accept: 'application/vnd.github.v3+json',
		}

		return config
	},
	function (error) {
		return Promise.reject(error)
	},
)

const httpService = {
	get: http.get,
}

export default httpService
