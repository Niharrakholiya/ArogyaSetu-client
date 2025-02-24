import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ArogyaSetuLandingPage from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ArogyaSetuLandingPage />
  </StrictMode>,
)
