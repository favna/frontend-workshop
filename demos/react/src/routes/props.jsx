import './props.css';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/props')({
	component: Props
});

function Props() {
	return (
		<>
			<GitHubButton onClick={() => console.log('Clicked!')} label="I'm a GitHub styled button!" />
			<StripeButton onClick={() => console.log('Clicked!')} label="I'm a Stripe styled button!" />
		</>
	);
}

function GitHubButton(props) {
	return (
		<button className="github-button" onClick={props.handleClick}>
			{props.label}
		</button>
	);
}

function StripeButton(props) {
	return (
		<button className="stripe-button" onClick={props.handleClick}>
			{props.label}
		</button>
	);
}
