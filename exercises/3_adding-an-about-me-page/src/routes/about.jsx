import './about.css';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
	component: AboutMe
});

function AboutMe() {
	return (
		<div className="about-me">
			<div>
				<div className="about-me-header">
					<h1>About Me</h1>
				</div>
				<div className="about-me-container">
					<p>Hello World! My name is PLACE_YOUR_NAME_HERE.</p>
					<p>WRITE SOMETHING ABOUT YOURSELF</p>
					<p>EACH OF THESE BLOCKS IS A NEW LINE</p>
					<p>FEEL FREE TO TAKE MORE SPACE</p>
				</div>
			</div>
		</div>
	);
}
