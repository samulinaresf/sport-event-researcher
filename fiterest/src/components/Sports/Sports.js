import React, { useState} from 'react'
import { CreateNewEvent } from "./CreateNewEvent";
import { ListOfSports } from "./ListOfSports";
import { SearchSport } from "./SearchSport";
import { T } from "../../config/T";

export const NavigationItem = () => (
  <span><T i18nKey="menu.home" defaultText="Inicio" /></span>
)


export const Sports = () => {
    const [listOfEventsState, setListOfEventsState] = useState([])
    
  return (
    <>
        <section className="content">
            <h2><T i18nKey="sports.page.title" defaultText="Deportes" /></h2>
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
