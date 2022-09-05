import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Wallet from './pages/wallet/Wallet';
import { grey } from '@mui/material/colors';

document.body.style.backgroundColor = grey[300];

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/carteira" element={<Wallet />} />
    </Routes>
  );
}
