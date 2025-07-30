import React, { useEffect, useState } from 'react'
import { EditEvent } from './EditEvent'

export const ListOfSports = ({listOfEventsState,setListOfEventsState}) => {

    useEffect(() => {
        getEventsFromLocalStorage()
        //Usar esto para limpiar el Local Storage cuando haga falta => localStorage.clear()
    },[])

    const getEventsFromLocalStorage = () => {

        let eventsFromLocalStorage = JSON.parse(localStorage.getItem("eventos"))
        setListOfEventsState(eventsFromLocalStorage)
        console.log(listOfEventsState)
    }

    const [editEventState, setEditEventState] = useState(0)


    const deleteEventFromLocalStorage = (id) =>{
        let listOfEventsUpdated = listOfEventsState.filter((eventos) => eventos.eventId !== parseInt(id))
        setListOfEventsState(listOfEventsUpdated)
        localStorage.setItem('eventos', JSON.stringify(listOfEventsUpdated));
        console.log(listOfEventsUpdated)
    }

    const editEventFromLocalStorage = (e,id) =>{
        e.preventDefault()
        setEditEventState(id)
        //alert(editEventState)

    }


    
  return (
    <>  
        {listOfEventsState != null ?
            listOfEventsState.map(eventos => {
            return(
                <article key={eventos.eventId}>
                    <h3 id='nameOfSportEvent' name='nameOfSportEvent'>{eventos.eventName}</h3>
                    <p id='idOfSportEvent' name='idOfSportEvent'>{eventos.eventId}</p>
                    <p id='dateOfSportEvent' name='dateOfSportEvent'>{eventos.eventDate}</p>
                    <p id='typeOfSportEvent' name='typeOfSportEvent'>{eventos.eventType}</p>
                    <p id='hostOfSportEvent' name='hostOfSportEvent'>{eventos.eventHost}</p>
                    <p id='descriptionOfSportEvent' name='descriptionOfSportEvent'>{eventos.description}</p>
                    <button className="edit-sport" onClick={(e)=>editEventFromLocalStorage(e,eventos.eventId)}>Editar</button>
                    <button className="delete-sport" onClick={()=>deleteEventFromLocalStorage(eventos.eventId)}>Eliminar</button>

                    {(eventos.eventId === editEventState) && <EditEvent eventos={eventos} setEditEventState={setEditEventState} setListOfEventsState={setListOfEventsState}/>}
                </article> 
            )
        })
        :<h2>No se han encontrado resultados</h2>
    }
    </>
  )
}
