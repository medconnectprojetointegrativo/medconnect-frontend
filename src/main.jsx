import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { BrowserRouter } from 'react-router';
import AppRoutes from './routes/routes.jsx';
import { AuthProvider } from './contexts/AuthContext';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<AppRoutes />
			</AuthProvider>
		</BrowserRouter>
	</StrictMode>,
);
