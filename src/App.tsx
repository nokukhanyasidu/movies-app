import 'bootstrap'
import {Routes, Route} from "react-router-dom";
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage';

function App() {
 

  return (
    <>
    <Navigation/>
  <Routes>
   
      <Route index element={<HomePage/>}/>
    
  </Routes>
    </>
  

  )
}

export default App
