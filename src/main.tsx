import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PortfolioApp from './app/PortfolioApp.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioApp />
  </StrictMode>
);
