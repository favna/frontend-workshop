import Link from '@/components/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

export default function About() {
	function calculateAge(birthday) {
		const ageDifMs = Date.now() - birthday.getTime();
		const ageDate = new Date(ageDifMs);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	const age = calculateAge(new Date('1995-02-21'));

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
						<Typography variant="body1">Hello World! My name is Jeroen Claassens</Typography>
						<Typography variant="body1">
							Currently {age} years old I am a developer from The Netherlands. I have been a tech enthusiast for as long as I can
							remember. At the time of writing I am working for <Link href="https://cgi.com">CGI inc</Link>. in The Netherlands as a
							Full-Stack Software Engineer
						</Typography>
						<Typography variant="body1">
							In my free time I have delved into a whole slew of small to large projects and some of these are used very actively!
							Notable mentions are my work on the{' '}
							<Link href="https://sapphirejs.dev">Sapphire Discord bot framework and JavaScript utilities</Link>, the{' '}
							<Link href="https://github.com/favware/dragonite">Dragonite Discord bot</Link> and my{' '}
							<Link href="https://redirect.favware.tech/graphqlpokemon">Pokémon API</Link>. For my other work I implore you to check out{' '}
							<Link href="https://redirect.favware.tech/github">my GitHub profile</Link>.
						</Typography>
						<Typography variant="body1">
							Outside of programming I enjoy playing video games, primarily action/adventure. I have a lot of love for Ubisoft&apos;s
							Assassin&apos;s Creed series. I also love consuming audiobooks and my favourite author is Brandon Sanderson. I absolutely
							adore his Cosmere universe. I also enjoy reading the Harry Potter franchise and I tend to re-listen to the series every
							few years. Overall I have a huge weak spot for most anything fantasy. From time to time I also play Dungeons & Dragons
							with my friends where I use my love for fantasy to go on epic table top adventures.
						</Typography>
					</Container>
				</Grid>
			</Grid>
		</Box>
	);
}
