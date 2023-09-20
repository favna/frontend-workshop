import Link from '@/components/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

export default function AboutPage() {
	return (
		<Box
			component="main"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				alignItems: 'center',
				p: 6,
				minHeight: 'calc(100vh - 64px)'
			}}
		>
			<Grid container spacing={2}>
				<Grid xs={12} sx={{ mb: 4 }}>
					<Typography variant="h1" sx={{ textAlign: 'center' }}>
						About Me
					</Typography>
				</Grid>
				<Grid container xs={12} alignContent="center" justifyContent="center">
					<Container>
						<Typography>
							Greetings, My name is Jeroen Claassens (a.k.a. <span title="My online alias!">Favna</span>) and I manage{' '}
							<Link href="https://github.com/favware" rel="noopener noreferrer" target="_blank">
								Favware
							</Link>
						</Typography>
						<Typography variant="body1">
							Currently 28 years old I am a developer hailing from The Netherlands. I have been a tech enthusiast for as long as I can
							remember. While attending high school my first choice of optional subjects was Informatics and this quickly showed to be
							my calling. After I graduated from high school I had no seconds thoughts about my next step - Software Engineering at a
							university. The university of choice ended up being The Hague University of Applied Sciences. After 5 years attending this
							university I obtained my Bachelor of IT in the summer of 2019. At the time of writing I am working for{' '}
							<Link href="https://www.cgi.com/nl/nl" rel="noopener noreferrer" target="_blank">
								CGI inc.
							</Link>{' '}
							in The Netherlands as a Full-Stack Software Engineer. This includes frontend, backend and DevOps work.{' '}
						</Typography>
						<Typography>
							{' '}
							In my free time I have delved into a whole slew of small to large projects and some of these are used very actively!
							Notable mentions are my work on the{' '}
							<Link
								href="https://sapphirejs.dev"
								rel="noopener noreferrer"
								target="_blank"
								class="text-cyan-700 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-cyan-500 visited:text-purple-700 dark:visited:text-purple-400"
							>
								Sapphire Discord bot framework and JavaScript utilities
							</Link>
							, the{' '}
							<Link
								href="https://github.com/favware/dragonite"
								rel="noopener noreferrer"
								target="_blank"
								class="text-cyan-700 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-cyan-500 visited:text-purple-700 dark:visited:text-purple-400"
							>
								Dragonite Discord bot
							</Link>{' '}
							and my{' '}
							<Link
								href="https://redirect.favware.tech/graphqlpokemon"
								rel="noopener noreferrer"
								target="_blank"
								class="text-cyan-700 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-cyan-500 visited:text-purple-700 dark:visited:text-purple-400"
							>
								Pokémon API
							</Link>
							. For my other work I implore you to check out{' '}
							<Link
								href="https://redirect.favware.tech/github"
								rel="noopener noreferrer"
								target="_blank"
								class="text-cyan-700 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-cyan-500 visited:text-purple-700 dark:visited:text-purple-400"
							>
								my GitHub profile
							</Link>
							.{' '}
						</Typography>
					</Container>
				</Grid>
			</Grid>
		</Box>
	);
}
