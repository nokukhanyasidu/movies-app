import 'bootstrap'
import {Routes, Route} from "react-router-dom";
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage';
import PopularMovies from './components/PopularMovies';
import Developer from './components/Developer';

function App() {
 

  return (
    <>
    <Navigation/>
  <Routes>
   
      <Route index element={<HomePage/>}/>
      <Route path="PopularMovies" element={<PopularMovies />} />
      <Route path="Developer" element={<Developer />} />
  </Routes>
    </>
  

  )
}

export default App
