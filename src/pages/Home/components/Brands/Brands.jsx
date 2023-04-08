import './Brands.scss';
import Brand from './Brand/Brand';
import { logos } from '../../../../assets';

const brands = [
	{
		logo: logos.godrej,
		link: 'https://www.godrej.com/',
		label: 'Godrej'
	},
	{
		logo: logos.oppo,
		link: 'https://www.oppo.com/en/',
		label: 'Oppo'
	},
	{
		logo: logos.coke,
		link: 'https://www.coca-cola.com/country-selector',
		label: 'Coca Cola'
	},
	{
		logo: logos.paypal,
		link: 'https://www.paypal.com/',
		label: 'PayPal'
	},
	{
		logo: logos.philips,
		link: 'https://www.usa.philips.com/',
		label: 'Philips'
	}
];

export default function Brands() {
	return (
		<section
			className='brands | container section-padding'
			aria-label='Brands'
		>
			{brands.map(brand => (
				<Brand
					key={brand.label}
					brand={brand}
				/>
			))}
		</section>
	);
}
