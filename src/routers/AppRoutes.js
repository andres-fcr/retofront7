import React from 'react';
import NavBar from '../components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Entrada from '../components/Entrada';
import Lista from '../components/Lista';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Lista />} />
                <Route exact path="/NuevaEntrada" element={<Entrada />} />
            </Routes>
        </BrowserRouter>
    )
};

export default AppRoutes;
