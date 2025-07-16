import { CreateNewEvent } from "./components/CreateNewEvent";
import { ListOfSports } from "./components/ListOfSports";
import { SearchSport } from "./components/SearchSport";

function App() {
  return (
    <div className="layout">
        <header className="header">
            <img src="/img/logo.png" alt="Logo de Fiterest" />
            <h1>Fiterest</h1>
        </header>
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Deportes</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>
        <section className="content">
            <h2>Mis deportes</h2>
            <ListOfSports />
        </section>
        <aside className="lateral">
            <SearchSport />
            <CreateNewEvent />
        </aside>
        <footer className="footer">&copy; Samuel Linares 2025</footer>
    </div>
  );
}

export default App;
