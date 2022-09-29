import { Navbar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage"
import { NewsPage } from "./components/NewsPage"
import { WeatherPage } from './components/WeatherPage';
import { CurrencyPage } from './components/CurrencyPage';
import { FavoritesPage } from './components/FavoritesPage';
import _ from 'lodash'
import { useState, useEffect } from 'react'


function App() {
  const [favorites, setFavorites] = useState([])
  const handleDeleteItem = (countryName) => {
    setFavorites((prev) => _.xorBy(prev, [{ countryName }], 'countryName'))
  }
  const handleFavoriteItem = (item) => {
    setFavorites(prev => _.uniqBy([...prev, item], 'countryName'))
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/weather" element={<WeatherPage handleFavoriteItem={handleFavoriteItem} />} />
          <Route path="/currency" element={<CurrencyPage />} />
          <Route path="/favorites" element={<FavoritesPage items={favorites} handleDeleteItem={handleDeleteItem} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
