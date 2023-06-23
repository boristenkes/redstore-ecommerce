import { useContext, Fragment } from 'react';
import DataContext from '../../context/DataContext';
import './SortBy.scss';

const sortOptions = ['Name', 'Rating', 'Price', 'Date'];

export default function SortBy() {
	const { setSort } = useContext(DataContext);

	return (
		<select
			className='sort-by'
			defaultValue='placeholder'
			onChange={e => setSort(e.target.value)}
		>
			<option
				value='placeholder'
				disabled
				hidden
			>
				Sort By
			</option>
			{sortOptions.map((option, index) => (
				<Fragment key={`${option}-${index}`}>
					<option
						value={option.toLowerCase() + '-asc'}
						aria-label={option + ' - ascending'}
					>
						{option} &#8599;
					</option>
					<option
						value={option.toLowerCase() + '-desc'}
						aria-label={option + ' - descending'}
					>
						{option} &#8600;
					</option>
				</Fragment>
			))}
		</select>
	);
}
