import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { NavBar } from '../components/navbar';

export const Route = createRootRoute({
	component: () => (
		<>
			<NavBar />
			<main>
				<Outlet />
			</main>
			<TanStackRouterDevtools />
		</>
	)
});
