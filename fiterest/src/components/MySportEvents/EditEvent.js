import React from 'react'
import { T } from "../../config/T";

export const EditEvent = ({eventos,setListOfEventsState,setEditEventState}) => {

    const updateEventInLocalStorage = (e,eventId) => {
        e.preventDefault();
        let target = e.target
        let eventsInStorage = JSON.parse(localStorage.getItem("eventos"))
        console.log(eventsInStorage)
        let index = eventsInStorage.findIndex(eventos => eventos.eventId === eventId)
        
        let updatedEvent = {
          eventId,
          eventName:target.eventName.value,
          eventDate:target.eventDate.value,
          eventType:target.eventType.value,
          eventHost:target.eventHost.value,
          eventDescription:target.eventDescription.value
        }
        eventsInStorage[index] = updatedEvent;
        localStorage.setItem('eventos', JSON.stringify(eventsInStorage));
        setListOfEventsState(eventsInStorage)
        setEditEventState(0)

        

    }

  return (
    <div>
        <form className='edit-event-form' onSubmit={e => updateEventInLocalStorage(e,eventos.eventId)}>
            <input id='edit-event-name' name='eventName' className="edit-event-field" defaultValue={eventos.eventName} />
            <input id='edit-event-date' name='eventDate' className="edit-event-field" defaultValue={eventos.eventDate} />
            <input id='edit-event-type' name='eventType' className="edit-event-field" defaultValue={eventos.eventType} />
            <input id='edit-event-host' name='eventHost' className="edit-event-field" defaultValue={eventos.eventHost} />
            <textarea id='edit-event-description' name='eventDescription' className="edit-event-field" defaultValue={eventos.eventDescription}></textarea>
            <button id='edit-event-button' name='edit-event-button' className="edit-event-button">{<T i18nKey="events.edit.button.update" defaultText="Actualizar" />}</button>
        </form>
    </div>
  )
}
