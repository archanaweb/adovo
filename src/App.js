import logo from './logo.svg';
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

function App() {
  return (
    
    <Router>  
    <div className="App">
      <Toaster />
    <Header />
      <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/signup" element={<Signup />}> </Route>
          <Route path="/verifyotp" element={<VerifyOtp />}> </Route>
        </Routes>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
