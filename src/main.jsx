import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './scss/styles.scss';
import { ProductProvider } from './context/ProductContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<ProductProvider>
				<App />
			</ProductProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
