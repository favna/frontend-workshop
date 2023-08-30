import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

export default function About() {
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
						<Typography variant="body1">Hello World! My name is PLACE_YOUR_NAME_HERE.</Typography>
						<Typography variant="body1">WRITE SOMETHING ABOUT YOURSELF</Typography>
						<Typography variant="body1">EACH OF THESE BLOCKS IS A NEW LINE</Typography>
						<Typography variant="body1">FEEL FREE TO TAKE MORE SPACE</Typography>
					</Container>
				</Grid>
			</Grid>
		</Box>
	);
}
