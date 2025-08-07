import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navigation = () => {
  return (
    <>
            <ul>
                <li><NavLink 
                className={({isActive}) => {return(
                    isActive ? "active" : "")}} 
                to="/">Inicio</NavLink></li>
                <li><NavLink className={({isActive}) => {return(
                    isActive ? "active" : "")}}  to="/deportes">Deportes</NavLink></li>
                <li><NavLink className={({isActive}) => {return(
                    isActive ? "active" : "")}}  to="/blog">Blog</NavLink></li>
                <li><NavLink className={({isActive}) => {return(
                    isActive ? "active" : "")}}  to="/contacto">Contacto</NavLink></li>
            </ul>
        </>
  )
}
