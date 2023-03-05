import './Counter.scss';

export default function Counter({
	value,
	setValue,
	label = 'counter',
	className = '',
	minValue = 1,
	maxValue = 100,
	...props
}) {
	const validate = value => {
		return value < minValue ? minValue : value > maxValue ? maxValue : value;
	};
	const capitalize = string => {
		return string[0].toUpperCase() + string.slice(1).toLowerCase();
	};
	return (
		<div
			className={`counter-wrapper ${className}`}
			{...props}
		>
			<button
				onClick={() => setValue(validate(value - 1))}
				aria-label={`Decrease ${label.toLowerCase()}`}
				className='counter-button'
			>
				-
			</button>
			<input
				type='text'
				readOnly
				inputMode='numeric'
				title={capitalize(label)}
				pattern='[0-9]+'
				value={value}
				className='counter'
				style={{
					padding: 0,
					margin: 0,
				}}
			/>
			<button
				onClick={() => setValue(validate(value + 1))}
				aria-label={`Increase ${label.toLowerCase()}`}
				className='counter-button'
			>
				+
			</button>
		</div>
	);
}
