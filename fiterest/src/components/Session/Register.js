import React from 'react'
import { T } from "../../config/T";


export const Register = () => {
  return (
    <>
              <section className='wideContent'>
                <div className='userProfile'>
                  <form className="userProfileForm">
                    <h3>{<T i18nKey="register.title" defaultText="Regístrate" />}</h3>
                    <label>{<T i18nKey="register.username" defaultText="Usuario" />}</label>
                    <input id='register-form-name' name='User name' type='text' className="register-form-name" placeholder="John" required />
                    <label>{<T i18nKey="register.email" defaultText="Email" />}</label><br></br>
                    <input id='register-form-email' name='User email' type='email' className="register-form-email" placeholder="john@john.com" required />
                    <label>{<T i18nKey="register.password" defaultText="Contraseña" />}</label><br></br>
                    <input id='register-form-password' name='User password' type='password' className="register-form-password" placeholder="12345" required />
                    <label>{<T i18nKey="register.repeat.password" defaultText="Repetir contraseña" />}</label><br></br>
                    <input id='register-form-password2' name="Password" type='password' className="register-form-password" placeholder="12345" required />
                    <button id='register-form-button' type='submit' className="register-form-button">{<T i18nKey="register.send" defaultText="Registrarse" />}</button>
                  </form>  
                </div>
              </section>
              
            </>
  )
}
