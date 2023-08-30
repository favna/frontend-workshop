import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.center}>
				<p className={styles.description}>Hello World!</p>
			</div>
		</main>
	);
}
