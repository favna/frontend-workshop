import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import NavBar from './navbar';
import Home from './routes/home';
import Items from './routes/items';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<NavBar />

			<main>
				<Routes>
					<Route path="item/:itemId" element={<Items />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</main>
		</BrowserRouter>
	</StrictMode>
);
