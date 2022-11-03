import React, { Component } from 'react'

import { Routes, Route } from "react-router-dom";
import DashboardComponent from './dashboard/dashboard.component';
import ExchangeComponent from './exchange/exchange.component';
import TokensComponent from './tokens/tokens.component';
import WalletComponent from './wallet/wallet.component';
import TradeComponent from './trade/trade.component';

export class AppRouter extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container-fluid">
                    <Routes>
                        <Route index path="/" element={
                            <DashboardComponent />
                        } />
                        <Route path="/exchange" element={
                            <ExchangeComponent />
                        } />
                        <Route path="/trade" element={
                            <TradeComponent />
                        } />
                        <Route path="/tokens" element={
                            <TokensComponent />
                        } />
                        <Route path="/wallet" element={
                            <WalletComponent />
                        } />
                    </Routes>
                </div>
            </div>

        )
    }
}

export default AppRouter