import React, { Component } from 'react'

import { Routes, Route } from "react-router-dom";
import DashboardComponent from './dashboard/dashboard.component';
import SwapComponent from './swap/swap.component';
import TokensComponent from './tokens/tokens.component';
import WalletComponent from './wallet/wallet.component';
import TradeComponent from './trade/trade.component';
import TokensDetailComponent from './tokens/tokensDetail.component';
import SignalComponent from './signals/signal.component';

export class AppRouter extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container-fluid">
                    <Routes>
                        <Route index path="/" element={
                            <DashboardComponent />
                        } />
                        <Route path="/swap" element={
                            <SwapComponent />
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
                        <Route path="/signals" element={
                            <SignalComponent />
                        } />
                        <Route path="/tokens/detail/:token" element={
                            <TokensDetailComponent />
                        } />
                    </Routes>
                </div>
            </div>

        )
    }
}

export default AppRouter