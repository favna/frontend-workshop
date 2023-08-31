import '@/styles/styles.css';

export default function Props() {
	return (
		<section>
			<BalanceToTheForce firstName="Anakin" lastName="Skywalker" />
		</section>
	);
}

function BalanceToTheForce(props) {
	return (
		<p>
			The person who was supposed to bring balance to the force was {props.firstName} {props.lastName}
		</p>
	);
}
