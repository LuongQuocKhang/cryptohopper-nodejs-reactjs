import React, { Component } from 'react'

import { Routes, Route } from "react-router-dom";
import DashboardComponent from './dashboard/dashboard.component';

export class AppRouter extends Component {
    render() {
        return (
            <Routes>
                <Route index path="/" element={
                    <DashboardComponent />
                } />
                <Route path="/inventory" element={
                    <DashboardComponent />
                } />
            </Routes>
        )
    }
}

export default AppRouter