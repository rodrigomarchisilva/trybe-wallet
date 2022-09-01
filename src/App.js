import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Wallet from './pages/wallet/Wallet';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/carteira" element={<Wallet />} />
    </Routes>
  );
}
