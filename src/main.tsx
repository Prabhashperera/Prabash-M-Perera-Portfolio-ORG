import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './App.css' // <--- YOU MUST ADD THIS LINE!

createRoot(document.getElementById('root')!).render(
  
    <BrowserRouter>
          <App />
    </BrowserRouter>
  ,
)
