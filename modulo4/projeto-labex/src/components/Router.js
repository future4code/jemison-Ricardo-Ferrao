import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { ListTripsPage } from '../pages/ListTripsPage/ListTripsPage';
import { AdminHomePage } from '../pages/AdminHomePage/AdminHomePage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { ApplicationFormPage } from '../pages/ApplicationFormPage/ApplicationFormPage'
import { TripDetailsPage } from '../pages/TripDetailsPage/TripDetailsPage'
import { CreateTripPage } from '../pages/CreateTripPage/CreateTripPage'






function Router() {
  return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <HomePage />}/>
                <Route path="/admin" element={<AdminHomePage />}/>
                <Route path="/trips/list" element={<ListTripsPage />}/>
                <Route path="/trips/application" element={<ApplicationFormPage />}/>
                <Route path="/admin/trips/create" element={<CreateTripPage />}/>
                <Route path="/admin/trips/:id" element={<TripDetailsPage />}/>
                <Route path="/Login" element={<LoginPage />}/>


            </Routes>
        </BrowserRouter>

    );
}

export default Router;