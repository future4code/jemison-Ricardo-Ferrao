import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ListTripsPage } from '../pages/ListTripsPage';
import { AdminHomePage } from '../pages/AdminHomePage';
import { LoginPage } from '../pages/LoginPage';
import { ApplicationFormPage } from '../pages/ApplicationFormPage'
import { TripDetailsPage } from '../pages/TripDetailsPage'
import { CreateTripPage } from '../pages/CreateTripPage'
import { ErrorPage } from '../pages/ErrorPage'





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
                <Route path="/404" element={ <ErrorPage />}/>

            </Routes>
        </BrowserRouter>



);
}

export default Router;