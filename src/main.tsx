import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Rimac } from './Rimac.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Rimac />
  </StrictMode>,
)
