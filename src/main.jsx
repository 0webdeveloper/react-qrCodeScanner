import { React } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import { Layout } from './Layout';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Layout />
  </HashRouter>
)
