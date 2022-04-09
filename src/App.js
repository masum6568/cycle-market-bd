
import './App.css';

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';

import Services from './Pages/Services/Services/Services';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
// import PrivateRoute from './Pages/privateRoute/PrivateRoute';

import SingleServices from './Pages/Services/Services/SingleServices';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import DashBoardHome from './Pages/DashBoard/DashBoardHome/DashBoardHome';
import GiveReview from './Pages/DashBoard/GiveReview/GiveReview';
import AddService from './Pages/Services/Services/AddService';
import LoadAddService from './Pages/Services/Services/LoadAddService';
import ManageServices from './Pages/DashBoard/ManageServices/ManageServices';
import BookingService from './Pages/Services/Services/BookingService';

function App() {


  return (

    <div className="App">

      <BrowserRouter>
        <AuthProvider>
          <Navigation></Navigation>
          <Routes>
            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/services" element={<PrivateRoute><Services /></PrivateRoute>}>
            </Route>
            <Route path="/details/:_id" element={<PrivateRoute><SingleServices /></PrivateRoute>}>
            </Route>
            <Route path="/about" element={
              <About />
            }>
            </Route>
            <Route path="/dashboard" element={<PrivateRoute>
              <DashBoard />
            </PrivateRoute>}>

              <Route exact path="/dashboard" element={<PrivateRoute><DashBoardHome /></PrivateRoute>}>
              </Route>

              <Route path={"/dashboard/giveReview"} element={<PrivateRoute><GiveReview /></PrivateRoute>}>
              </Route>
              <Route path={"/dashboard/:addService"} element={<PrivateRoute><AddService /></PrivateRoute>}>
              </Route>
              <Route path={"/dashboard/manageServices"} element={<PrivateRoute><ManageServices /></PrivateRoute>}>
              </Route>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/order" element={<BookingService />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            <Route exact path="/" element={<Home />}>
            </Route>

          </Routes>
        </AuthProvider>
      </BrowserRouter>




    </div>
  );
}

export default App;
