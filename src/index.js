import React from 'react'
import App from './App';
import { createRoot } from 'react-dom/client';
import './styles/App.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // createRoot(container!) if you use TypeScript
root.render(<App />);
