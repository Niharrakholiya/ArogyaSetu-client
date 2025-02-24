import { Routes, Route } from 'react-router-dom';
import ArogyaSetuLanding from '@/pages/ArogyaSetuLandingPage';
import WhatsAppRedirectPage from '@/pages/Redirect';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ArogyaSetuLanding />} />
      <Route path="/redirect" element={<WhatsAppRedirectPage />} />
    </Routes>
  );
};

export default App;