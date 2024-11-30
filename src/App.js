
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './website/pages/home';
import Signup from './website/pages/signup/index.jsx';
import Header from './website/components/Header.jsx';
import Footer from './website/components/Footer.jsx';
import toast, { Toaster } from 'react-hot-toast';
import VerifyOtp from './website/pages/varifyOtp/index.jsx';
import { useEffect } from 'react';
import UserDashboard from './website/pages/userDashboard/dashboard/index.jsx';
import ForgotPassword from './website/pages/passwordForget/index.jsx';
import ResetPassword from './website/pages/passwordForget/ResetPassword.jsx';
import AllOffers from './website/pages/userDashboard/offers/AllOffer.jsx';
import UserProfile from './website/pages/userDashboard/profile/index.jsx';
import Cashout from './website/pages/userDashboard/cashout/index.jsx';

function App() {
  const authUser = JSON.parse(localStorage.getItem('opinionUser'))
  return (
    
    <Router>  
    <div className="App">
    <Toaster />
     {!authUser && <Header />}
      <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/signup" element={<Signup />}> </Route>
          <Route path="/verifyotp" element={<VerifyOtp />}> </Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}> </Route>
          <Route path="/resetpassword" element={<ResetPassword />}> </Route>
          <Route path="/dashboard" element={<UserDashboard/>}> </Route>
          <Route path="/alloffers" element={<AllOffers/>}> </Route>
          <Route path="/userprofile" element={<UserProfile/>}> </Route>
          <Route path="/cashout" element={<Cashout/>}> </Route>
        </Routes>
        {!authUser && <Footer/>}
    </div>
    </Router>
  );
}

export default App;
