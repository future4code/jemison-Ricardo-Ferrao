import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../components/HomePage';
import { PokedexPage } from '../components/PokedexPage';
import { DetalhesPage } from '../components/DetalhesPage';


function Router() {
  return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <HomePage />}/>
                <Route path="/" element={<HomePage />}/>
                <Route path="/PokedexPage" element={<PokedexPage />}/>
                <Route path="/PokedexPage/DetalhesPage" element={<DetalhesPage />}/>

            </Routes>
        </BrowserRouter>

    );
}

export default Router