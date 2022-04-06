
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Services from './Pages/Services/Services/Services';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import PrivateRoute from './Pages/privateRoute/PrivateRoute';

function App() {
  return (

    <div className="App">


      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/services" element={<Services />}>
          </Route>
          <Route path="/about" element={<PrivateRoute>
            <About />
          </PrivateRoute>}>
          </Route>
          {/* <Route path="/services" element={
            <Services />
          }>
          </Route> */}
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
          <Route exact path="/" element={<Home />}>
          </Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
