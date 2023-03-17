import './Pagination.scss';
import { v4 as uuid } from 'uuid';
import {
	FiChevronLeft as ArrowLeft,
	FiChevronRight as ArrowRight,
} from 'react-icons/fi';
import { HiDotsHorizontal as Dots } from 'react-icons/hi';
import { useContext, useEffect, useState } from 'react';
import DataContext from '../../context/DataContext';
import PageItem from './PageItem';

export default function Pagination({ allProducts }) {
	const maxProductsPerPage = 12;
	const [pageButtons, setPageButtons] = useState([]);
	const totalPages = Math.ceil(allProducts.length / maxProductsPerPage);
	const { currentPage } = useContext(DataContext);
	const pageNumbers = [];

	useEffect(() => {
		for (let i = 0; i < totalPages; i++) {
			pageNumbers.push(i);
		}

		const allPageButtons = pageNumbers.map(pageIndex => (
			<PageItem
				isActive={pageIndex === currentPage}
				to={pageIndex}
				key={uuid()}
			>
				{pageIndex + 1}
			</PageItem>
		));

		const visiblePageButtons = allPageButtons.slice(
			currentPage - 2 < 0 ? 0 : currentPage - 2,
			currentPage + 3,
		);

		setPageButtons([
			currentPage > 2
				? [
						<PageItem isActive={currentPage === 1} to={1} key={uuid()}>
							1
						</PageItem>,
						<PageItem isDisabled key={uuid()}>
							<Dots />
						</PageItem>,
				  ]
				: [],

			...visiblePageButtons,

			currentPage < totalPages - 3
				? [
						<PageItem isDisabled key={uuid()}>
							<Dots />
						</PageItem>,
						<PageItem isActive={currentPage === totalPages - 1} key={uuid()}>
							{totalPages}
						</PageItem>,
				  ]
				: [],
		]);
	}, [currentPage, totalPages]);

	return (
		totalPages !== 1 && (
			<nav>
				<ul className='pagination | container'>
					<PageItem to={currentPage - 1} isDisabled={!currentPage}>
						<ArrowLeft />
					</PageItem>

					{pageButtons}

					<PageItem
						to={currentPage + 1}
						isDisabled={currentPage === totalPages - 1}
					>
						<ArrowRight />
					</PageItem>
				</ul>
			</nav>
		)
	);
}
