import React, { useState } from 'react'
import { SaveEventsInLocalStorage } from '../helpers/SaveEventsInLocalStorage';

export const CreateNewEvent = ({setListOfEventsState}) => {
    const [newEventState, setNewEventState] = useState({
            id:'',
            name:'',
            date:'',
            type:'',
            host:'',
            description:''
        })
    let getFormData = (e) => {

        e.preventDefault();
        let eventId = Date.now()
        let eventName = e.target.eventName.value
        let eventDate = e.target.eventDate.value
        let eventType = e.target.eventType.value
        let eventHost = e.target.eventHost.value
        let eventDescription = e.target.eventDescription.value
        
        let newEvent = {
            eventId,
            eventName,
            eventDate,
            eventType,
            eventHost,
            eventDescription
        }

        setNewEventState(newEvent)

        console.log(newEvent)

        setListOfEventsState(itemsInLocalStorage => {
            return[...itemsInLocalStorage, newEvent];
        })

        SaveEventsInLocalStorage("eventos",newEvent);
        
    }
    
    

    

  return (
    <>
        <div className="create-sport">
                <h3>Crear nuevo evento</h3>
                <form onSubmit={getFormData}>
                    {(newEventState.name && newEventState.date && newEventState.type && newEventState.host && newEventState.description) && newEventState.name}
                    <input id='create-event-name' name='eventName' className="create-event-name" placeholder="Deporte" />
                    <input id='create-event-date' name='eventDate' className="create-event-date" placeholder="Fecha" />
                    <input id='create-event-type' name='eventType' className="create-event-type" placeholder="Tipo" />
                    <input id='create-event-host' name='eventHost' className="create-event-host" placeholder="Anfitrión" />
                    <textarea id='create-event-description' name='eventDescription' className="create-event-description" placeholder="Descripción"></textarea>
                    <button id='create-event-button' name='create-event-button' className="create-event-button">Subir</button>
                </form>  
        </div>
    </>
  )
}
