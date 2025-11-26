import { LanguageProvider } from '../contexts/LanguageContext';
import AppRouter from './AppRouter';

function PortfolioApp() {
  return (
    <LanguageProvider>
      <AppRouter />
    </LanguageProvider>
  );
}

export default PortfolioApp;
