export function Sample() {
	return (
		<div>
			<BalanceToTheForce firstName="Anakin" lastName="Skywalker" />
		</div>
	);
}

export default function BalanceToTheForce(props) {
	return (
		<p>
			The person who was supposed to bring balance to the force was {props.firstName} {props.lastName}
		</p>
	);
}
