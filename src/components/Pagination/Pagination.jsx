import './Pagination.scss';
import { v4 as uuid } from 'uuid';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { HiDotsHorizontal } from 'react-icons/hi';
import { useContext, useEffect, useState } from 'react';
import ProductContext from '../../context/ProductContext';
import PageItem from './PageItem';

export default function Pagination({ allProducts }) {
	const maxProductsPerPage = 12;
	const paginationButtons = [];
	const totalPages = Math.round(allProducts.length / maxProductsPerPage);
	const { currentPage } = useContext(ProductContext);

	for (let i = 0; i < totalPages; i++)
		paginationButtons.push(
			<PageItem isActive={i === currentPage} to={i} key={uuid()}>
				{i + 1}
			</PageItem>,
		);

	if (totalPages > 4)
		paginationButtons.push(
			<>
				<PageItem key={uuid()}>
					<HiDotsHorizontal />
				</PageItem>

				<PageItem to={totalPages} key={uuid()}>
					{totalPages}
				</PageItem>
			</>,
		);

	return (
		<ul className='pagination | container'>
			{currentPage !== 0 && (
				<PageItem to={currentPage - 1} key={uuid()}>
					<FiChevronLeft />
				</PageItem>
			)}

			{paginationButtons}

			{currentPage !== totalPages - 1 && (
				<PageItem to={currentPage + 1} key={uuid()}>
					<FiChevronRight />
				</PageItem>
			)}
		</ul>
	);
}
