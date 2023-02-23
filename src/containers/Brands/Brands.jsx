import './Brands.scss';

import Brand from '../../components/Brand/Brand';
import { useFetch } from '../../hooks';
import { Loader } from '../../components';

export default function Brands() {
	const [brands, fetchError, isLoading] = useFetch('/brands');

	return (
		<section className='brands | container section-padding'>
			{isLoading && <Loader />}
			{!fetchError ? (
				brands.map(brand => <Brand key={brand.id} brand={brand} />)
			) : (
				<p style={{ color: 'red' }}>{fetchError}</p>
			)}
		</section>
	);
}
