import './Home.scss';
import {
	Categories,
	FeaturedProducts,
	Header,
	LatestProducts,
} from '../../containers';

export default function Home() {
	return (
		<>
			<Header />
			<Categories />
			<FeaturedProducts />
			<LatestProducts />
		</>
	);
}
