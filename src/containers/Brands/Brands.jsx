import './Brands.scss';
import { Brand } from '../../components';

export default function Brands() {
	const brands = [
		{
			id: 'af4e5aa8-ee8a-42e1-8808-36ade5032253',
			logo: 'https://github.com/boristenkes/redstore-ecommerce/blob/main/src/assets/logo-godrej.webp?raw=true',
			link: 'https://www.godrej.com/',
			label: 'Godrej',
		},
		{
			id: '19143ed2-233e-45c8-9eef-ba0e0fa40189',
			logo: 'https://github.com/boristenkes/redstore-ecommerce/blob/main/src/assets/logo-oppo.webp?raw=true',
			link: 'https://www.oppo.com/en/',
			label: 'Oppo',
		},
		{
			id: 'a8183611-2f11-45a2-82d0-ba9395d9434d',
			logo: 'https://github.com/boristenkes/redstore-ecommerce/blob/main/src/assets/logo-coca-cola.webp?raw=true',
			link: 'https://www.coca-cola.com/country-selector',
			label: 'Coca Cola',
		},
		{
			id: 'd470736f-e951-44c1-b600-71fcfe3bf5e1',
			logo: 'https://github.com/boristenkes/redstore-ecommerce/blob/main/src/assets/logo-paypal.webp?raw=true',
			link: 'https://www.paypal.com/',
			label: 'PayPal',
		},
		{
			id: 'a6648de0-9599-4485-a46e-e3d6d1475903',
			logo: 'https://github.com/boristenkes/redstore-ecommerce/blob/main/src/assets/logo-philips.webp?raw=true',
			link: 'https://www.usa.philips.com/',
			label: 'Philips',
		},
	];

	return (
		<section className='brands | container section-padding'>
			{brands.map(brand => (
				<Brand
					key={brand.id}
					brand={brand}
				/>
			))}
		</section>
	);
}
