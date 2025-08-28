import React from 'react'
import { NavLink } from 'react-router-dom'
import { T } from "../../config/T";
import { SocialMediaLinks } from '../Routers/SocialMediaLinks';

export const Home = () => {
  return (
    <>
      <section className='wideContent'>
        <div className="homeSloganContainer">
        <p>
          <T
            i18nKey="home.slogan"
            defaultText="Tu web de reseñas de eventos deportivos."
          />
        </p>

        <div className="homeMenu">
          <NavLink to="/deportes">
            <div className="homeMenuContainer">
              <p className="latestEventsLink">
                <T
                  i18nKey="home.menu.latest"
                  defaultText="Ver últimos eventos"
                />
              </p>
            </div>
          </NavLink>

          <NavLink to="/subir-evento">
            <div className="homeMenuContainer">
              <p className="latestEventsLink">
                <T
                  i18nKey="home.menu.upload"
                  defaultText="Sube tu evento"
                />
              </p>
            </div>
          </NavLink>

          <NavLink
            to="https://buymeacoffee.com/samli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="homeMenuContainer">
              <p className="latestEventsLink">
                <T
                  i18nKey="home.menu.buyCoffee"
                  defaultText="Cómprame un café"
                />
              </p>
            </div>
          </NavLink>

          <NavLink to="/sobre-nosotros">
            <div className="homeMenuContainer">
              <p className="latestEventsLink">
                <T
                  i18nKey="home.menu.leaveReview"
                  defaultText="Sobre nosotros"
                />
              </p>
            </div>
          </NavLink>
        </div>
      </div>
      <div className='featuredEvents'>
        <h3>Eventos destacados</h3>
        <ul className='featuredEventsList'>
          <li>
            <article className='featuredEventsListContainer'>
              <img src='/img/evento-yoga.jpg' alt="Imagen del evento"></img>
              <h3 id='nameOfSportEvent' name='nameOfSportEvent'>Nombre</h3>
              <p id='dateOfSportEvent' name='dateOfSportEvent'>Fecha</p>
              <p id='typeOfSportEvent' name='typeOfSportEvent'>Tipo</p>
              <p id='hostOfSportEvent' name='hostOfSportEvent'>Host</p>
              <p id='descriptionOfSportEvent' name='descriptionOfSportEvent'>Descripción</p>
              <button>Dejar una reseña</button>
            </article> 
          </li>
          <li>
            <article className='featuredEventsListContainer'>
              <img src='/img/evento-yoga.jpg' alt="Imagen del evento"></img>
              <h3 id='nameOfSportEvent' name='nameOfSportEvent'>Nombre</h3>
              <p id='dateOfSportEvent' name='dateOfSportEvent'>Fecha</p>
              <p id='typeOfSportEvent' name='typeOfSportEvent'>Tipo</p>
              <p id='hostOfSportEvent' name='hostOfSportEvent'>Host</p>
              <p id='descriptionOfSportEvent' name='descriptionOfSportEvent'>Descripción</p>
              <button>Dejar una reseña</button>
            </article> 
          </li>
          <li>
            <article className='featuredEventsListContainer'>
              <img src='/img/evento-yoga.jpg' alt="Imagen del evento"></img>
              <h3 id='nameOfSportEvent' name='nameOfSportEvent'>Nombre</h3>
              <p id='dateOfSportEvent' name='dateOfSportEvent'>Fecha</p>
              <p id='typeOfSportEvent' name='typeOfSportEvent'>Tipo</p>
              <p id='hostOfSportEvent' name='hostOfSportEvent'>Host</p>
              <p id='descriptionOfSportEvent' name='descriptionOfSportEvent'>Descripción</p>
              <button>Dejar una reseña</button>
            </article> 
          </li>
          <li>
            <article className='featuredEventsListContainer'>
              <img src='/img/evento-yoga.jpg' alt="Imagen del evento"></img>
              <h3 id='nameOfSportEvent' name='nameOfSportEvent'>Nombre</h3>
              <p id='dateOfSportEvent' name='dateOfSportEvent'>Fecha</p>
              <p id='typeOfSportEvent' name='typeOfSportEvent'>Tipo</p>
              <p id='hostOfSportEvent' name='hostOfSportEvent'>Host</p>
              <p id='descriptionOfSportEvent' name='descriptionOfSportEvent'>Descripción</p>
              <button>Dejar una reseña</button>
            </article> 
          </li>
        </ul>
      </div>
      <div className='featuredEvents'>
        <h3>Eventos destacados 2</h3>
        <ul className='featuredEventsList'>
          <li>
            <article className='featuredEventsListContainer'>
              <img src='/img/evento-yoga.jpg' alt="Imagen del evento"></img>
              <h3 id='nameOfSportEvent' name='nameOfSportEvent'>Nombre</h3>
              <p id='dateOfSportEvent' name='dateOfSportEvent'>Fecha</p>
              <p id='typeOfSportEvent' name='typeOfSportEvent'>Tipo</p>
              <p id='hostOfSportEvent' name='hostOfSportEvent'>Host</p>
              <p id='descriptionOfSportEvent' name='descriptionOfSportEvent'>Descripción</p>
              <button>Dejar una reseña</button>
            </article> 
          </li>
          <li>
            <article className='featuredEventsListContainer'>
              <img src='/img/evento-yoga.jpg' alt="Imagen del evento"></img>
              <h3 id='nameOfSportEvent' name='nameOfSportEvent'>Nombre</h3>
              <p id='dateOfSportEvent' name='dateOfSportEvent'>Fecha</p>
              <p id='typeOfSportEvent' name='typeOfSportEvent'>Tipo</p>
              <p id='hostOfSportEvent' name='hostOfSportEvent'>Host</p>
              <p id='descriptionOfSportEvent' name='descriptionOfSportEvent'>Descripción</p>
              <button>Dejar una reseña</button>
            </article> 
          </li>
          <li>
            <article className='featuredEventsListContainer'>
              <img src='/img/evento-yoga.jpg' alt="Imagen del evento"></img>
              <h3 id='nameOfSportEvent' name='nameOfSportEvent'>Nombre</h3>
              <p id='dateOfSportEvent' name='dateOfSportEvent'>Fecha</p>
              <p id='typeOfSportEvent' name='typeOfSportEvent'>Tipo</p>
              <p id='hostOfSportEvent' name='hostOfSportEvent'>Host</p>
              <p id='descriptionOfSportEvent' name='descriptionOfSportEvent'>Descripción</p>
              <button>Dejar una reseña</button>
            </article> 
          </li>
          <li>
            <article className='featuredEventsListContainer'>
              <img src='/img/evento-yoga.jpg' alt="Imagen del evento"></img>
              <h3 id='nameOfSportEvent' name='nameOfSportEvent'>Nombre</h3>
              <p id='dateOfSportEvent' name='dateOfSportEvent'>Fecha</p>
              <p id='typeOfSportEvent' name='typeOfSportEvent'>Tipo</p>
              <p id='hostOfSportEvent' name='hostOfSportEvent'>Host</p>
              <p id='descriptionOfSportEvent' name='descriptionOfSportEvent'>Descripción</p>
              <button>Dejar una reseña</button>
            </article> 
          </li>
        </ul>
      </div>
      <SocialMediaLinks />
      </section>
    </>
  )
}

