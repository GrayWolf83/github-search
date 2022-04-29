import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BackButton from '../components/common/back-button'
import ReposList from '../components/ui/repos-list'
import {
	getCurrentUser,
	getCurrentUserRepos,
	loadCurrentUser,
	loadCurrentUserRepos,
} from '../store/users'

const User = () => {
	const { login } = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		if (login) {
			dispatch(loadCurrentUser(login))
			dispatch(loadCurrentUserRepos(login, 1))
		}
	}, [login])

	const user = useSelector(getCurrentUser())
	const repos = useSelector(getCurrentUserRepos())

	return (
		<>
			<BackButton />
			{user && (
				<div className='row mt-2'>
					<div className='col-md-4 col-lg-3'>
						<img
							src={user.avatar_url}
							width={200}
							className='rounded'
							alt=''
						/>
						<h3 className='fw-bold mt-2'>{user.name}</h3>
						<h4 className='mt-2'>{user.login}</h4>
						<p>Подписчики: {user.followers}</p>
						<p>Подписки: {user.following}</p>
						<p>Репозиториев: {user.public_repos}</p>
						<p>
							<a
								href={user.html_url}
								target='_blank'
								rel='noreferrer'
								className='text-dark text-decoration-underline'>
								Профиль на GitHub
							</a>
						</p>
						<p>
							<a
								href={user.blog}
								target='_blank'
								rel='noreferrer'
								className='text-dark text-decoration-underline'>
								Личный блог
							</a>
						</p>
					</div>
					<div className='col-md-8 col-lg-9'>
						<ReposList
							repos={repos}
							count={user.public_repos}
							login={user.login}
						/>
					</div>
				</div>
			)}
		</>
	)
}

export default User
