import { useContext } from 'react';
import { scrollToTop } from '../../utils';
import ProductContext from '../../context/DataContext';

export default function PageItem({
	to,
	isActive,
	isDisabled,
	children,
	...props
}) {
	const { setCurrentPage } = useContext(ProductContext);
	return (
		<li
			className='pagination-item'
			{...props}
		>
			<button
				className={`${isActive ? 'active' : ''}`}
				onClick={() => {
					setCurrentPage(to);
					scrollToTop();
				}}
				disabled={isDisabled}
			>
				{children}
			</button>
		</li>
	);
}
