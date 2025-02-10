
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import Index from './website/routes/index.js';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Index />
    </div>
  );
}

export default App;
