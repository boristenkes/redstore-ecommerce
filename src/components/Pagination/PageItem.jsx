import { useContext } from 'react';
import ProductContext from '../../context/ProductContext';

export default function PageItem({
	to,
	isActive,
	isDisabled,
	children,
	...props
}) {
	const { setCurrentPage } = useContext(ProductContext);
	return (
		<li className='pagination-item' {...props}>
			<button
				className={`${isActive ? 'active' : ''}`}
				onClick={() => {
					setCurrentPage(to);
				}}
				disabled={isDisabled}
			>
				{children}
			</button>
		</li>
	);
}
