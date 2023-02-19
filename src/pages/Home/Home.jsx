import './Home.scss';
import { Categories, FeaturedProducts, Header } from '../../containers';

export default function Home() {
	return (
		<>
			<Header />
			<Categories />
			<FeaturedProducts />
		</>
	);
}
