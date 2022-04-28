import React from 'react'
import Loader from '../common/loader'

const ReposList = ({ repos }) => {
	return (
		<>
			<h3 className='fw-bold text-center'>Репозитории</h3>
			<div className='row'>
				{repos ? (
					repos.map((repo) => (
						<div className='col-6 mb-2' key={repo.node_id}>
							<div className='card p-2 bg-dark text-light h-100'>
								<h4 className='card-title fw-bold fs-6 text-center'>
									{repo.name}
								</h4>

								{repo.language && <p>Язык: {repo.language}</p>}
								{repo.description && (
									<p>Описание: {repo.description}</p>
								)}
								{repo.created_at && (
									<p>
										Создано:{' '}
										{new Date(
											repo.created_at,
										).toLocaleDateString()}
									</p>
								)}
								{repo.updated_at && (
									<p>
										Обновлено:{' '}
										{new Date(
											repo.updated_at,
										).toLocaleDateString()}
									</p>
								)}
							</div>
						</div>
					))
				) : (
					<Loader />
				)}
			</div>
		</>
	)
}

export default ReposList
