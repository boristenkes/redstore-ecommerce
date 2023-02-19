import './Home.scss';
import {
	Categories,
	CTA,
	FeaturedProducts,
	Header,
	LatestProducts,
	Testimonials,
} from '../../containers';

export default function Home() {
	return (
		<>
			<Header />
			<Categories />
			<FeaturedProducts />
			<LatestProducts />
			<CTA />
			<Testimonials />
		</>
	);
}
