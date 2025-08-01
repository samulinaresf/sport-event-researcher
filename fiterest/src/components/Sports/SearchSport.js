import React, { useState } from 'react'

export const SearchSport = ({listOfEventsState,setListOfEventsState,eventos}) => {

  let [search, setSearch] = useState('')
  const [showDeleteFilter, setShowDeleteFilter] = useState(false)


  const handleChange = (e) => {
    let query = e.target.value
    setSearch(query)
    if(query.length == 0){
      const allEvents = JSON.parse(localStorage.getItem("eventos")) || []
      setListOfEventsState(allEvents)
    }
  }

  const searchEvent = (e) => {
    e.preventDefault()
    setListOfEventsState(JSON.parse(localStorage.getItem("eventos")))
    let query = search.toLowerCase().trim()
    let eventFound = listOfEventsState.filter(eventos => {
      return eventos.eventName.toLowerCase().includes(query) || eventos.eventHost.toLowerCase().includes(query)
    })

    if(query.length == 0){
      const allEvents = JSON.parse(localStorage.getItem("eventos")) || []
      setListOfEventsState(allEvents)
    }

    if(search.length == 0){
        eventFound = JSON.parse(localStorage.getItem("eventos"))
      
    }else{
      setListOfEventsState(eventFound)
    }

    setShowDeleteFilter(true)
  }

  const deleteFilter = (e) =>{
    e.preventDefault()
    const allEvents = JSON.parse(localStorage.getItem("eventos")) || []
    setListOfEventsState(allEvents)
    setShowDeleteFilter(false)
  }

  return (
    <>
        <div className="search-sport" >
                <h3>Buscador</h3>
                <form onSubmit={searchEvent}>
                    <input className="search-input" name='searchInput' id='searchInput' autoComplete='off' placeholder="Nombre del deporte o anfitrión" value={search} onChange={handleChange}/>
                    <button className="search-button">Buscar</button><br></br>
                    {showDeleteFilter  && (<button className='delete-filter-button' onClick={deleteFilter}>x {search}</button>)
                    }
                </form>  
        </div>
    </>
  )
}
