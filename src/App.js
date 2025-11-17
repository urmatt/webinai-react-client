import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// import './App.css';
import './components/AppHeader';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <div class="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/registration' element={<RegistrationPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
