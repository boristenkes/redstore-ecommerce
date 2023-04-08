import styled from 'styled-components';

const Button = styled.button`
	font-family: var(--ff-button);
	background: var(--clr-primary-500);
	color: #fff;
	padding: 0.5rem 1.875rem;
	border-radius: 100vmax;
	display: block;
	width: fit-content;
	border: none;

	&:hover {
		background: var(--clr-primary-700);
	}

	@media only screen and (max-width: 640px) {
		margin-inline: auto;
	}
`;

export default Button;
