import React from 'react'

export const SearchSport = () => {
  return (
    <>
        <div className="search">
                <h3>Buscador</h3>
                <form>
                    <input className="search-input" placeholder="Nombre del deporte" />
                    <button className="search-button">Buscar</button>
                </form>  
        </div>
    </>
  )
}
