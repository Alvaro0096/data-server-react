import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Links from './components/Links';
import Home from './pages/Home';
import Tokens from './pages/Tokens';
import Empresas from './pages/Empresas';

function App() {
  return (
    <>
      <BrowserRouter>
        <Links />
          <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/tokens' element={<Tokens />}></Route>
            <Route path='/empresas' element={<Empresas />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
