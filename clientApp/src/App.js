// import './App.css';
import AppRouter from './components/AppRouter';

import NavbarComponent from './components/layout/navbar/navbar.component';
import FooterComponent from './components/layout/footer/footer.component';

function App() {
    return (
        <div className="App">
            <NavbarComponent />
            <AppRouter />
            <FooterComponent />
        </div>
    );
}

export default App;
