import {
	FaStar as FullStar,
	FaStarHalfAlt as HalfStar,
	FaRegStar as EmptyStar,
} from 'react-icons/fa';

export default function getStars(rating) {
	let fullStars = Math.floor(rating);
	let halfStars = rating % 1 >= 0.5 ? 1 : 0;
	let emptyStars = 5 - fullStars - halfStars;

	let stars = [];
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
