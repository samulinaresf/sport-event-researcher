import React, { useState } from 'react'
import { SaveEventsInLocalStorage } from '../../helpers/SaveEventsInLocalStorage';
import { T } from "../../config/T";


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
                <h3><T i18nKey="events.create.title" defaultText="Crear un nuevo evento" /></h3>
                <form onSubmit={getFormData}>
                    {(newEventState.name && newEventState.date && newEventState.type && newEventState.host && newEventState.description) && newEventState.name}
                    <input id='create-event-name' name='eventName' className="create-event-name" placeholder={<T i18nKey="events.create.field.name.placeholder" defaultText="Deporte" />} />
                    <input id='create-event-date' name='eventDate' className="create-event-date" placeholder={<T i18nKey="events.create.field.date.placeholder" defaultText="Fecha" />} />
                    <input id='create-event-type' name='eventType' className="create-event-type" placeholder={<T i18nKey="events.create.field.type.placeholder" defaultText="Tipo" />} />
                    <input id='create-event-host' name='eventHost' className="create-event-host" placeholder={<T i18nKey="events.create.field.host.placeholder" defaultText="Anfitrión" />} />
                    <textarea id='create-event-description' name='eventDescription' className="create-event-description" placeholder="Descripción"></textarea>
                    <button id='create-event-button' name='create-event-button' className="create-event-button">{<T i18nKey="events.create.button.submit" defaultText="Subir" />}</button>
                </form>  
        </div>
    </>
  )
}
