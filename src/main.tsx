
import { BrowserRouter } from 'react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { MainRouter } from './router/'

const rootElement = document.getElementById('root')

if (rootElement) {
	createRoot(rootElement).render(

		<StrictMode>
			<BrowserRouter>
				<MainRouter />
			</BrowserRouter>
		</StrictMode>
	)
}
