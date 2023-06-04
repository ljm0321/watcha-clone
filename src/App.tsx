import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import MainPage from './pages/MainPage';
import TvPage from './pages/TvPage';
import MovieDetail from './pages/MovieDetail';
import TvDetail from './pages/TvDetail';
import './styles/Common.scss';
import Search from './pages/Search';
import Login from './pages/Login';
import ScrollTop from './components/ScrollTop';
import SearchResult from './pages/SearchResult';

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/tv" element={<TvPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/searchResult" element={<SearchResult />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/tv/:id" element={<TvDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
