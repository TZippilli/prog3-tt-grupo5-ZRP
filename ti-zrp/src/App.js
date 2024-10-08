import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favoritos from './pages/Favoritos';
import Footer from './Components/Footer/Footer';
import PaginaPopulares from './pages/Populares';
import PaginaCarteleras from './pages/Cartelera';
import NotFound from './pages/NotFound';
import MovieDetail from './Components/MovieDetail/MovieDetail';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favoritos" exact component={Favoritos} />
        <Route path="/populares" exact component={PaginaPopulares} />
        <Route path="/cartelera" exact component={PaginaCarteleras} />
        <Route path="/movies/:movieId" exact component={MovieDetail} /> 
        <Route path="/search" exact component={SearchResults} />
        <Route component={NotFound} ></Route> 

      </Switch>
      <Footer />
    </>
  );
}

export default App;

