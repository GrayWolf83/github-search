import React from 'react'

const ReposListItem = ({ repo }) => {
	return (
		<div className='card p-2 bg-dark text-light h-100'>
			<h4 className='card-title fw-bold fs-6 text-center'>{repo.name}</h4>

			{repo.language && <p>Язык: {repo.language}</p>}
			{repo.description && <p>Описание: {repo.description}</p>}
			{repo.created_at && (
				<p>Создано: {new Date(repo.created_at).toLocaleDateString()}</p>
			)}
			{repo.updated_at && (
				<p>
					Обновлено: {new Date(repo.updated_at).toLocaleDateString()}
				</p>
			)}
		</div>
	)
}

export default ReposListItem
