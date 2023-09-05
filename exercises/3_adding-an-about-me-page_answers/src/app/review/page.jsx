import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

export default function ReviewPage() {
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
						Graduate Class Review
					</Typography>
				</Grid>
				<Grid container xs={12} alignContent="center" justifyContent="center">
					<Container>
						<Typography variant="body1">
							<strong>This is a brief review of the graduate class.</strong>
						</Typography>
						<Typography variant="body1">
							I have really been enjoying my time with the graduate class. I have learned a lot of information already about object
							oriented programming and right now I am following a frontend fundamentals workshop which is really informative. I still
							have a long road ahead of me and I am especially excited to graduate and start working on my capstone project. Before I
							graduate I will have the opportunity to do an OCA exam which will help me in all my future endeavours which I really
							appreciate. I can greatly recommend any junior developers looking to learn more of what it is like in the field to join
							the CGI graduate class.
						</Typography>
					</Container>
				</Grid>
			</Grid>
		</Box>
	);
}
