import React from 'react'
import { T } from "../../config/T";


export const Login = () => {
  return (
    <>
          <section className='wideContent'>
            <div className='userProfile'>
              <form className="userProfileForm">
                <h3>{<T i18nKey="login.title" defaultText="Inicia sesión" />}</h3>
                <label>{<T i18nKey="login.username" defaultText="Usuario" />}</label>
                <input id='login-form-name' name='User name' type='text' className="login-form-name" placeholder="John" required />
                <label>{<T i18nKey="login.password" defaultText="Contraseña" />}</label>
                <input id='login-form-password' name='User password' type='password' className="login-form-password" placeholder="john@john.com" required />
                <button id='login-form-button' type='submit' className="login-form-button">{<T i18nKey="login.send" defaultText="Iniciar sesión" />}</button>
              </form>  
            </div>
          </section>
          
        </>
  )
}
