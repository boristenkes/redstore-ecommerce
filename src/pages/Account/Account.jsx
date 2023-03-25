import './Account.scss';
import Form from './Form/Form';

import { hero } from '../../assets';
import { useState } from 'react';

export default function Account() {
	const [activeForm, setActiveForm] = useState('login');

	return (
		<main className='account'>
			<div className='account-wrapper | container even-columns section-padding'>
				<div className='account-left'>
					<img
						src={hero}
						alt='2 footballers cheering'
					/>
				</div>
				<div className='account-right'>
					<div className='account-form-wrapper'>
						<div className='account-form-navigators'>
							<button
								className='account-form-navigators-navigator'
								onClick={() => setActiveForm('login')}
							>
								Login
							</button>
							<button
								className='account-form-navigators-navigator'
								onClick={() => setActiveForm('register')}
							>
								Register
							</button>
							<span
								className='underline'
								style={{
									transform: `translateX(${
										activeForm === 'login' ? -20 : 100
									}%)`,
								}}
							></span>
						</div>
						<div
							className='account-forms'
							style={{
								transform: `translateX(${
									activeForm === 'login' ? 0 : '-131%'
								})`,
							}}
						>
							<Form type='login' />
							<Form
								type='register'
								style={{
									transform: `translateX(75%)`,
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
