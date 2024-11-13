import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './website/pages/home';

function App() {
  return (
    
    <Router>  
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />}> 
          </Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
