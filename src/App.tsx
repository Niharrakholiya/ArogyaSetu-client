import { Routes, Route } from 'react-router-dom';
import ArogyaSetuLanding from '@/pages/ArogyaSetuLandingPage';
import WhatsAppRedirectPage from '@/pages/Redirect';
import DemoPlayer from '@/pages/DemoPlayer';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ArogyaSetuLanding />} />
      <Route path="/redirect" element={<WhatsAppRedirectPage />} />
      <Route path="/demo" element={<DemoPlayer />} />
    </Routes>
  );
};

export default App;