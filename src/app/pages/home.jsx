import React from 'react'
import Pagination from '../components/common/pagination'
import SearchBar from '../components/ui/search-bar'
import UsersList from '../components/ui/users-list'

const Home = () => {
	return (
		<>
			<SearchBar />
			<UsersList />
			<Pagination />
		</>
	)
}

export default Home
