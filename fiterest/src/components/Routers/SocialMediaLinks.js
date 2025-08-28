import React from 'react'
import { NavLink } from 'react-router-dom'

export const SocialMediaLinks = () => {
  return (
    <>
        <div className='socialMedia'>
            <NavLink><img src='img/logo-instagram.png' alt='Logo de instagram' className='socialMediaIcon'/></NavLink>
            <NavLink><img src='img/logo-tiktok.png' alt='Logo de Tiktok' className='socialMediaIcon'/></NavLink>
            <NavLink><img src='img/logo-x.png' alt='Logo de X' className='socialMediaIcon' /></NavLink>
        </div>
    </>
  )
}
