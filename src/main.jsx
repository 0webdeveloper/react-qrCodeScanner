import { React } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Layout } from './Layout';
import { QrCodeGegerator } from './QrCodeGegerator';
import { QrCodeScanner } from './QrCodeScanner';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)
