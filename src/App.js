import './App.css';
import './components/AppHeader';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        | <Link to="/login">Login</Link>
        | <Link to="/registration">Registration</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/registration' element={<RegistrationPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
