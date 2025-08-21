import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { T } from "../../config/T";

export const Navigation = () => {
  const { t, i18n } = useTranslation()

  const changeTo = (lng) => {
    i18n.changeLanguage(lng)
  }


  const [sliderMenuState, setSliderMenuState] = useState(false)

  const sliderMenu = () => {
    setSliderMenuState(!sliderMenuState)
  }



  return (
    <>
            <ul>
                <li><NavLink 
                className={({isActive}) => {return(
                    isActive ? "active" : "")}} 
                to="/"><T i18nKey="nav.home" defaultText="Inicio" /></NavLink></li>
                <li><NavLink className={({isActive}) => {return(
                    isActive ? "active" : "")}}  to="/deportes"><T i18nKey="nav.sports" defaultText="Deportes" /></NavLink></li>
                <li><NavLink className={({isActive}) => {return(
                    isActive ? "active" : "")}}  to="/blog"><T i18nKey="nav.blog" defaultText="Blog" /></NavLink></li>
                <li><NavLink className={({isActive}) => {return(
                    isActive ? "active" : "")}}  to="/contacto"><T i18nKey="nav.contact" defaultText="Contacto" /></NavLink></li>
                <li><NavLink className={({isActive}) => {return(
                    isActive ? "active" : "")}}  to="/perfil"><T i18nKey="nav.profile" defaultText="Perfil" /></NavLink></li>
                <li>
                    <div className='languageMenuConstainer'>
                        <button id='selectLanguageMenu' onClick={() => sliderMenu()}><T i18nKey="nav.language" defaultText="Idioma" /></button>
                        <ul className={ sliderMenuState ? 'languageButtonListFocus' : 'languageButtonListUnfocus'}>
                            <li><button className='languageButton' onClick={() => changeTo('es')}><img src='/img/icon-lng-es.png'></img></button></li>
                            <li><button className='languageButton' onClick={() => changeTo('en')}><img src='/img/icon-lng-en.png'></img></button></li>
                            <li><button className='languageButton' onClick={() => changeTo('it')}><img src='/img/icon-lng-it.png'></img></button></li>
                            <li><button className='languageButton' onClick={() => changeTo('fr')}><img src='/img/icon-lng-fr.png'></img></button></li>
                            <li><button className='languageButton' onClick={() => changeTo('de')}><img src='/img/icon-lng-de.png'></img></button></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </>
  )
}
