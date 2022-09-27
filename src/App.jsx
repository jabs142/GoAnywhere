import { Navbar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage} from "./components/HomePage"
import {NewsPage} from "./components/NewsPage"
import { WeatherPage } from './components/WeatherPage';
import { CurrencyPage } from './components/CurrencyPage';


function App() {

  return (
    <div>
  
      <BrowserRouter>
      <Navbar /> 
        <Routes> 
          <Route path="/home" element ={<HomePage />} /> 
          <Route path="/news" element={<NewsPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/currency" element={<CurrencyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
