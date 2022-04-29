import React from 'react'
import { useSelector } from 'react-redux'
import { getReposPage, loadCurrentUserRepos } from '../../store/users'
import Loader from '../common/loader'
import Pagination from '../common/pagination'
import ReposListItem from './repos-list-item'

const ReposList = ({ repos, count, login }) => {
	const reposPage = useSelector(getReposPage())

	return (
		<>
			<h3 className='fw-bold text-center'>Репозитории</h3>
			<div className='row'>
				{repos ? (
					repos.map((repo) => (
						<div className='col-6 mb-2' key={repo.node_id}>
							<ReposListItem repo={repo} />
						</div>
					))
				) : (
					<Loader />
				)}
				<Pagination
					items={repos}
					page={reposPage}
					count={count}
					value={login}
					perPage={4}
					cb={loadCurrentUserRepos}
				/>
			</div>
		</>
	)
}

export default ReposList
