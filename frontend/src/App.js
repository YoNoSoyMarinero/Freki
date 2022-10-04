//importing third part libraries
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';

//importing pages & components
function App() {
  
  return (
    <div className="App">
        <ThemeProvider>
          <BrowserRouter>
            <Navbar></Navbar>
          </BrowserRouter>
        </ThemeProvider>
    </div>
  );
}

export default App;
