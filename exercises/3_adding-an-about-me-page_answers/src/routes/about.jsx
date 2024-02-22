import './about.css';

export default function AboutMePage() {
	return (
		<div className="about-me">
			<div>
				<div className="about-me-header">
					<h1>About Me</h1>
				</div>
				<div className="about-me-container">
					<p>
						Greetings, My name is Jeroen Claassens (a.k.a. <span title="My online alias!">Favna</span>) and I manage{' '}
						<a href="https://github.com/favware" rel="noopener noreferrer" target="_blank">
							Favware
						</a>
					</p>
					<p>
						Currently 28 years old I am a developer hailing from The Netherlands. I have been a tech enthusiast for as long as I can
						remember. While attending high school my first choice of optional subjects was Informatics and this quickly showed to be my
						calling. After I graduated from high school I had no seconds thoughts about my next step - Software Engineering at a
						university. The university of choice ended up being The Hague University of Applied Sciences. After 5 years attending this
						university I obtained my Bachelor of IT in the summer of 2019. At the time of writing I am working for{' '}
						<a href="https://www.cgi.com/nl/nl" rel="noopener noreferrer" target="_blank">
							CGI inc.
						</a>{' '}
						in The Netherlands as a Full-Stack Software Engineer. This includes frontend, backend and DevOps work.{' '}
					</p>
					<p>
						{' '}
						In my free time I have delved into a whole slew of small to large projects and some of these are used very actively! Notable
						mentions are my work on the{' '}
						<a href="https://sapphirejs.dev" rel="noopener noreferrer" target="_blank">
							Sapphire Discord bot framework and JavaScript utilities
						</a>
						, the{' '}
						<a href="https://github.com/favware/dragonite" rel="noopener noreferrer" target="_blank">
							Dragonite Discord bot
						</a>{' '}
						and my{' '}
						<a a="https://redirect.favware.tech/graphqlpokemon" rel="noopener noreferrer" target="_blank">
							Pokémon API
						</a>
						. For my other work I implore you to check out{' '}
						<a href="https://redirect.favware.tech/github" rel="noopener noreferrer" target="_blank">
							my GitHub profile
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
}
