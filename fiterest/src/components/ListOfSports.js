import React from 'react'

export const ListOfSports = () => {
    const nameOfSportEvent = "Deporte Nombre"
    const dateOfSportEvent = "01/01/2026"
    const typeOfSportEvent = "Deporte Tipo"
    const hostOfSportEvent = "Deporte Anfitrión"
    const descriptionOfSportEvent = "Descripción"
  return (
    <>
        <div className="sport-items">
                <article>
                    <h3 id='nameOfSportEvent' name='nameOfSportEvent'>{nameOfSportEvent}</h3>
                    <p id='dateOfSportEvent' name='dateOfSportEvent'>{dateOfSportEvent}</p>
                    <p id='typeOfSportEvent' name='typeOfSportEvent'>{typeOfSportEvent}</p>
                    <p id='hostOfSportEvent' name='hostOfSportEvent'>{hostOfSportEvent}</p>
                    <p id='descriptionOfSportEvent' name='descriptionOfSportEvent'>{descriptionOfSportEvent}</p>
                    <button className="edit-sport">Editar</button>
                    <button className="delete-sport">Eliminar</button>
                </article>
                <article>
                    <h3>{nameOfSportEvent}</h3>
                    <p>01/01/2026</p>
                    <p>Tipo de deporte</p>
                    <p>Anfitrion</p>
                    <p>Descripción deporte 1</p>
                    <button className="edit-sport">Editar</button>
                    <button className="delete-sport">Eliminar</button>
                </article>
                <article>
                    <h3>{nameOfSportEvent}</h3>
                    <p>01/01/2026</p>
                    <p>Tipo de deporte</p>
                    <p>Anfitrion</p>
                    <p>Descripción deporte 1</p>
                    <button className="edit-sport">Editar</button>
                    <button className="delete-sport">Eliminar</button>
                </article>
            </div>
    
    </>
  )
}
