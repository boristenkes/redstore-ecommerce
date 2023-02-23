import './Pagination.scss';
import { v4 as uuid } from 'uuid';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { HiDotsHorizontal } from 'react-icons/hi';
import { useEffect, useState } from 'react';

export default function Pagination({ allProducts, setCurrentPageProducts }) {
	const maxProductsPerPage = 12;
	const paginationButtons = [];
	const totalPages = Math.round(allProducts.length / maxProductsPerPage);
	const [currentPage, setCurrentPage] = useState(1);

	const currentPageProducts = allProducts.slice(
		currentPage - 1,
		maxProductsPerPage,
	);

	for (let i = 1; i < totalPages; i++)
		paginationButtons.push(
			<PageItem
				isActive={i === currentPage}
				setCurrentPage={setCurrentPage}
				to={i}
				key={uuid()}
			>
				{i}
			</PageItem>,
		);

	if (totalPages > 4)
		paginationButtons.push(
			<>
				<PageItem isDisabled={true} key={uuid()}>
					<HiDotsHorizontal />
				</PageItem>

				<PageItem setCurrentPage={setCurrentPage} to={totalPages} key={uuid()}>
					{totalPages}
				</PageItem>
			</>,
		);

	return (
		<ul className='pagination | container'>
			{currentPage !== 1 && (
				<PageItem
					setCurrentPage={setCurrentPage}
					to={currentPage - 1}
					key={uuid()}
				>
					<FiChevronLeft />
				</PageItem>
			)}

			{paginationButtons.slice(0, maxProductsPerPage)}

			{currentPage !== totalPages && (
				<PageItem
					setCurrentPage={setCurrentPage}
					to={currentPage + 1}
					key={uuid()}
				>
					<FiChevronRight />
				</PageItem>
			)}
		</ul>
	);
}

function PageItem({
	to,
	isDisabled,
	isActive,
	children,
	setCurrentPage,
	...props
}) {
	return (
		<li className='pagination-item' {...props}>
			<button
				className={`${isActive ? 'active' : ''}`}
				onClick={() => {
					setCurrentPage(to);
					setCurrentPageProducts(all);
				}}
				disabled={isDisabled}
			>
				{children}
			</button>
		</li>
	);
}
