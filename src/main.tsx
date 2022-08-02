import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { Buffer } from 'buffer'
import { MoralisProvider } from "react-moralis"
window.Buffer = window.Buffer || Buffer

ReactDOM.createRoot(document.getElementById('root')!).render(
  //<MoralisProvider serverUrl="https://pjk884yvw4xm.usemoralis.com:2053/server" appId="7aMXxh9JqydxZBbXpcsfaTp59Bj8pT4L65o66Vjv">
    <BrowserRouter>
      <ChakraProvider>
      <React.StrictMode>
        
          <App />
      
      </React.StrictMode>
      </ChakraProvider>
    </BrowserRouter>
  //</MoralisProvider>
)
