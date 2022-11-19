import React, { useState } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import LoginComponent from './components/login/login.component';
function App() {
    const [token, setToken] = useState(localStorage.getItem("access_token"));
    
    if(!token) {
        return <LoginComponent setToken={setToken} />
    }
    return (
        <div className="App">
            <AppRouter />
        </div>
    );
}

export default App;
