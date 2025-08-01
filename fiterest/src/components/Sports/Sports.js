import React, { useState} from 'react'
import { CreateNewEvent } from "./CreateNewEvent";
import { ListOfSports } from "../ListOfSports";
import { SearchSport } from "./SearchSport";

export const Sports = () => {
    const [listOfEventsState, setListOfEventsState] = useState([])
    
  return (
    <>
        <section className="content">
            <h2>Eventos deportivos</h2>
            <div className="sport-items">
                <ListOfSports listOfEventsState={listOfEventsState} setListOfEventsState={setListOfEventsState}/>
            </div>
            
        </section>
        <aside className="lateral">
            <SearchSport listOfEventsState={listOfEventsState} setListOfEventsState={setListOfEventsState}/>
            <CreateNewEvent setListOfEventsState={setListOfEventsState}/>
        </aside>
    </>
  )
}
