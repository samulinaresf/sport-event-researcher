import React from 'react'
import { T } from "../config/T";


export const Contact = () => {
  return (
    <>
      <section className='wideContent'>
        <div className="contact-form">
          <form action="https://formsubmit.co/samuel13tf@gmail.com" method="POST">
            <h3>{<T i18nKey="contact.title" defaultText="Rellena este formulario" />}</h3>
            <label>{<T i18nKey="contact.name" defaultText="Nombre" />}</label><br></br>
            <input id='contact-form-name' name='User name' type='text' className="contact-form-name" placeholder="John" required /><br></br>
            <label>{<T i18nKey="contact.email" defaultText="Email" />}</label><br></br>
            <input id='contact-form-date' name='User email' type='email' className="contact-form-date" placeholder="john@john.com" required /><br></br>
            <label>{<T i18nKey="contact.message" defaultText="Mensaje" />}</label><br></br>
            <textarea id='contact-form-description' name='Message description' className="contact-form-description" placeholder="..." required></textarea><br></br>
            <button id='contact-form-button' type='submit' className="contact-form-button">{<T i18nKey="contact.send" defaultText="Enviar" />}</button>
          </form>  
        </div>
      </section>
      
    </>
  )
}
