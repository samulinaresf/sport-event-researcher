import React, { useEffect, useState } from 'react'

export const ListOfSports = ({listOfEventsState,setListOfEventsState}) => {

    useEffect(() => {
        getEventsFromLocalStorage()
    },[])

    //const [listOfEventsState , setListOfEventsState] = useState([])

    const getEventsFromLocalStorage = () => {

        let eventsFromLocalStorage = JSON.parse(localStorage.getItem("eventos"))
        setListOfEventsState(eventsFromLocalStorage)
        console.log(listOfEventsState)
    }


    
  return (
    <>  
        {listOfEventsState != null ?
            listOfEventsState.map(eventos => {
            return(
                <article key={eventos.id}>
                    <h3 id='nameOfSportEvent' name='nameOfSportEvent'>{eventos.eventName}</h3>
                    <p id='idOfSportEvent' name='idOfSportEvent'>{eventos.eventId}</p>
                    <p id='dateOfSportEvent' name='dateOfSportEvent'>{eventos.eventDate}</p>
                    <p id='typeOfSportEvent' name='typeOfSportEvent'>{eventos.eventType}</p>
                    <p id='hostOfSportEvent' name='hostOfSportEvent'>{eventos.eventHost}</p>
                    <p id='descriptionOfSportEvent' name='descriptionOfSportEvent'>{eventos.description}</p>
                    <button className="edit-sport">Editar</button>
                    <button className="delete-sport">Eliminar</button>
                </article> 
            )
        })
        :<h2>No se han encontrado resultados</h2>
    }
    </>
  )
}
