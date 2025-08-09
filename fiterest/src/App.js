import { Contact } from "./components/Contact";
import { MainRouter } from "./components/Routers/MainRouter";
import { Navigation } from "./components/Routers/Navigation";
import { BrowserRouter } from 'react-router-dom'



function App() {

  return (
    <BrowserRouter>
    <div className={Contact ? "layout-no-sidebar" : "layout"}></div>
    <div className="layout">
        <header className="header">
            <img src="/img/logo.png" alt="Logo de Fiterest" />
            <h1>Fiterest</h1>
        </header>
        <nav className="nav">
          <Navigation />
        </nav>
          <MainRouter />

        

        <footer className="footer">&copy; Samuel Linares 2025</footer>
    </div>
    </BrowserRouter>
  );
}


export default App;
