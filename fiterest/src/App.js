import { Home } from "./components/Home";
import { Sports } from "./components/Sports/Sports";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { BrowserRouter,Routes,Route,NavLink} from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
    <div className="layout">
        <header className="header">
            <img src="/img/logo.png" alt="Logo de Fiterest" />
            <h1>Fiterest</h1>
        </header>
        <nav className="nav">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/deportes">Deportes</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
        </nav>
                <Routes>
                    <Route path="/" element={<Home></Home>} />
                    <Route path="/deportes" element={<Sports></Sports>} />
                    <Route path="/blog" element={<Blog></Blog>} />
                    <Route path="/contacto" element={<Contact></Contact>}></Route>
                </Routes>

        <footer className="footer">&copy; Samuel Linares 2025</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
