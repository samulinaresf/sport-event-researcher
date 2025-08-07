import React from 'react'

export const Contact = () => {
  return (
    <>
      <section className='wide-content'>
        <div className="contact-form">
          <form>
            <h3>Rellena este formulario</h3>
            <label>Nombre:</label><br></br>
            <input id='contact-form-name' name='eventName' className="contact-form-name" placeholder="Nombre" /><br></br>
            <label>Email:</label><br></br>
            <input id='contact-form-date' name='eventDate' className="contact-form-date" placeholder="Email" /><br></br>
            <label>Mensaje:</label><br></br>
            <textarea id='contact-form-description' name='eventDescription' className="contact-form-description" placeholder="Mensaje"></textarea><br></br>
            <button id='contact-form-button' name='contact-form-button' className="contact-form-button">Enviar</button>
          </form>  
        </div>
      </section>
      
    </>
  )
}
