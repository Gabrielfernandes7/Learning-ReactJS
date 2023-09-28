import './App.css';
import Empresa from './pages/Empresa';
import Home from './pages/Home';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;