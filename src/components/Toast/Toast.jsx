import './Toast.scss';
import { MdClose as Close } from 'react-icons/md';
import { useEffect } from 'react';

export default function Toast({
	text = 'Toast text goes here',
	isActive,
	setIsActive,
	className = '',
	duration = 3000,
	position = '',
	style = {},
	offset = '3rem',
}) {
	const toastPos = {
		...(position.toLowerCase().includes('top')
			? { top: offset }
			: { bottom: offset }),
		...(position.toLowerCase().includes('left')
			? { left: offset }
			: { right: offset }),
	};

	useEffect(() => {
		if (isActive) setTimeout(() => setIsActive(false), duration);
	}, [isActive]);

	return (
		<div
			className={`${className} | toast ${isActive ? 'active' : ''}`}
			style={Object.assign(toastPos, style)}
		>
			<p
				role='alert'
				className='toast-text'
			>
				{text}
			</p>
			<button className='toast-close'>
				<Close />
			</button>
		</div>
	);
}
