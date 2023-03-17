import './Form.scss';
import { ImEye as EyeOpen, ImEyeBlocked as EyeClosed } from 'react-icons/im';
import { useState } from 'react';
import { Button } from '../../../components';

export default function Form({ type, ...props }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [isPasswordField, setIsPasswordField] = useState(true);

	return (
		<form
			className='account-form'
			data-form={type}
			onSubmit={e => e.preventDefault()}
			{...props}
		>
			<input
				className='account-form-input'
				type='text'
				placeholder='Username'
				value={username}
				onChange={e => setUsername(e.target.value)}
				required
			/>
			{type === 'register' && (
				<input
					className='account-form-input'
					type='email'
					placeholder='Email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					required
				/>
			)}
			<label className='account-form-password-wrapper'>
				<input
					className='account-form-input'
					type={isPasswordField ? 'password' : 'text'}
					placeholder='Password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
				<button
					type='button'
					className='account-form-password-toggler'
					onClick={() => setIsPasswordField(prev => !prev)}
					aria-label={(isPasswordField ? 'Show' : 'Hide') + ' password'}
				>
					{isPasswordField ? <EyeOpen /> : <EyeClosed />}
				</button>
			</label>
			<Button
				className='account-form-submit'
				type='submit'
			>
				{capitalize(type)}
			</Button>
		</form>
	);
}

function capitalize(string) {
	return string.at(0).toUpperCase() + string.slice(1).toLowerCase();
}
