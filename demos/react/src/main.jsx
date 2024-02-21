import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Home from './routes/home';
import Drinking from './routes/drinking';
import Effect from './routes/effect';
import Lists from './routes/lists';
import Props from './routes/props';
import Ref from './routes/ref';
import State from './routes/state';
import NavBar from './navbar';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<NavBar />

			<main>
				<Routes>
					<Route path="/drinking" element={<Drinking />} />
					<Route path="/effect" element={<Effect />} />
					<Route path="/lists" element={<Lists />} />
					<Route path="/props" element={<Props />} />
					<Route path="/ref" element={<Ref />} />
					<Route path="/state" element={<State />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</main>
		</BrowserRouter>
	</StrictMode>
);
