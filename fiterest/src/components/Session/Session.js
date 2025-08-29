import React from 'react'
import { NavLink } from 'react-router-dom'

export const Session = () => {
  return (
    <>
      <section className='content'>
        <div className="userProfileAdmin">
          <img src='/img/profile-picture.png' alt='Foto de perfil'></img>
          <p>Usuario</p>
          <p>Email</p>
          <p>Contraseña</p>
          <p>Rol</p>
          <NavLink to="/perfil/mis-deportes">Mis deportes</NavLink>
        </div>
      </section>
      <aside id='editUserProfile' className='lateral'>
        <form className='editUserProfileForm'>
          <h4>Editar perfil</h4>
          <label>Usuario</label>
          <input placeholder='John'></input>
          <label>Email</label>
          <input placeholder='john@example.com'></input>
          <label>Contraseña</label>
          <input placeholder='***'></input>
          <label>Suscripción válida hasta:00/00/00</label>
          <button id='saveUserProfileFormButton'>Guardar</button>
          <button id='cancelUserSuscriptionButton'>Cancelar suscripción/Suscribirse</button>
        </form>
      </aside>
    </>
  )
}
