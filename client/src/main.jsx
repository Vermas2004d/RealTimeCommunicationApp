import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {CssBaseline} from "@mui/material"

//removing the strict mode because they will show 
//the component twice in the dev mode//

createRoot(document.getElementById('root')).render(
  < >
  
    <CssBaseline />
    <App />
    
  </>,
)
