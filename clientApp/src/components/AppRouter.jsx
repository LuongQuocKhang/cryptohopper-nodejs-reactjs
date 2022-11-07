import React, { Component } from 'react'

import { Routes, Route } from "react-router-dom";
import DashboardComponent from './dashboard/dashboard.component';
import SwapComponent from './swap/swap.component';
import TokensComponent from './tokens/tokens.component';
import WalletComponent from './wallet/wallet.component';
import TradeComponent from './trade/trade.component';
import TokensDetailComponent from './tokens/tokensDetail.component';
import SignalComponent from './signals/signal.component';
import BacktestingComponent from './backtesting/backtesting.component';
import StrategiesComponent from './strategies/strategies.component';
import StrategiesNewComponent from './strategies/strategies.new.component';
import StrategiesEditComponent from './strategies/strategies.edit.component';

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

                        {/* Token Route */}
                        <Route path="/tokens" element={
                            <TokensComponent />
                        } />
                         <Route path="/tokens/detail/:token" element={
                            <TokensDetailComponent />
                        } />

                        {/* Wallet Route */}
                        <Route path="/wallet" element={
                            <WalletComponent />
                        } />

                        {/* Signals Route */}
                        <Route path="/signals" element={
                            <SignalComponent />
                        } />

                        {/* Backtesting Route */}
                        <Route path="/backtesting" element={
                            <BacktestingComponent />
                        } />

                        {/* strategies Route */}
                        <Route path="/strategies" element={
                            <StrategiesComponent />
                        } />
                        <Route path="/strategies/new" element={
                            <StrategiesNewComponent />
                        } />
                         <Route path="/strategies/:strategyId" element={
                            <StrategiesEditComponent />
                        } />
                    </Routes>
                </div>
            </div>

        )
    }
}

export default AppRouter