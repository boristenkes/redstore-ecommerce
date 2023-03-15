import {
	FaStar as FullStar,
	FaStarHalfAlt as HalfStar,
	FaRegStar as EmptyStar,
} from 'react-icons/fa';

export default function getStars(rating) {
	const fullStars = Math.floor(rating);
	const halfStars = rating % 1 >= 0.5;
	const emptyStars = 5 - fullStars - halfStars;

	const stars = [];
	for (let i = 0; i < fullStars; i++) {
		stars.push(
			<li key={i}>
				<FullStar />
			</li>,
		);
	}
	if (halfStars) {
		stars.push(
			<li key={fullStars + 0.5}>
				<HalfStar />
			</li>,
		);
	}
	for (let i = 0; i < emptyStars; i++) {
		stars.push(
			<li key={fullStars + halfStars + i}>
				<EmptyStar />
			</li>,
		);
	}
	return stars;
}
