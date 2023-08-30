import MuiLink from '@mui/material/Link';
import NextLink from 'next/link';

export default function Link({ href, children, ...props }) {
	return (
		<MuiLink component={NextLink} href={href}  {...props}>
			{children}
		</MuiLink>
	);
}
