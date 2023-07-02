import './App.css';


import { useThemeContext } from './context/ThemeContext';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Timer from './pages/Timer';
import Navbar from './components/Navbar/Navbar'

function App() {
  const {contextTheme} = useThemeContext()
  
   
  return (
    <div className="App">      
      <header className="App-header" id={contextTheme} > 
      
        
      
                         
        <Routes>
          <Route path="/" element={<Navbar/>} >
         
            <Route index element={ <Home /> } />
            <Route path="/timer" element={<Timer />} />  
            
          </Route>                    
        </Routes>
      </header>
    </div>
  );
}
   
export default App;
