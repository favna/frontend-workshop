import NavBar from '@/components/NavBar/NavBar';
import Container from '@mui/material/Container';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<NavBar />
				<Container sx={{ py: 2 }}>{children}</Container>
			</body>
		</html>
	);
}
