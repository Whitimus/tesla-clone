import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ModelS from './pages/ModelS';
import ModelX from './pages/ModelX';
import Cybertruck from './pages/CyberTruck';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<App>
				<Home />
			</App>
		),
	},
	{
		path: '/model_s',
		element: (
			<App>
				<ModelS />
			</App>
		),
	},
	{
		path: '/model_x',
		element: (
			<App>
				<ModelX />
			</App>
		),
	},
	{
		path: '/cybertruck',
		element: (
			<App>
				<Cybertruck />
			</App>
		),
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
