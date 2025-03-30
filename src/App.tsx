
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import Ipsen from './pages/Ipsen';
import NotFound from './pages/NotFound';
import SSTPage from './pages/SSTPage';
import MACSSTPage from './pages/MACSSTPage';
import GestesPosturesPage from './pages/GestesPosturesPage';
import CGUPage from './pages/CGUPage';
import MentionsLegalesPage from './pages/MentionsLegalesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/ipsen" element={<Ipsen />} />
      <Route path="/formation-sst" element={<SSTPage />} />
      <Route path="/formation-mac-sst" element={<MACSSTPage />} />
      <Route path="/formation-gestes-postures" element={<GestesPosturesPage />} />
      <Route path="/cgu" element={<CGUPage />} />
      <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
