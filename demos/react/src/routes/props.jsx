export default function Props() {
	return (
		<>
			<BalanceToTheForce firstName="Anakin" lastName="Skywalker" />
		</>
	);
}

function BalanceToTheForce(props) {
	return (
		<p>
			The person who was supposed to bring balance to the force was {props.firstName} {props.lastName}
		</p>
	);
}
