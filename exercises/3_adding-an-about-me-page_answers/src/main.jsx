import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import NavBar from './navbar';
import About from './routes/about';
import Home from './routes/home';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<NavBar />

			<main>
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</main>
		</BrowserRouter>
	</StrictMode>
);
