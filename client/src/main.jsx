import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

//removing the strict mode because they will show 
//the component twice in the dev mode//

createRoot(document.getElementById('root')).render(
  
  
   <StrictMode>
    <BrowserRouter> 
    <App />  
   </BrowserRouter>
   </StrictMode>
  
)
