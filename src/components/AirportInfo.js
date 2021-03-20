import React, { useState } from 'react';
import './AirportInfo.css';
import Places from './Places';

function AirportInfo() { 
    const [places,setPlaces] = useState([])
    const [query,setQuery] = useState("")
    const [showPlaces,setShowPlaces] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        async function fetchMyAPI() {
            const reqOptions = {
                method: 'GET',
                headers: {
                    "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                    "useQueryString": true
                }
            }
            let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?" + new URLSearchParams({query: query}), reqOptions)
            response = await response.json()
            console.log(response.Places)
            setPlaces(response.Places)
        }
        fetchMyAPI()
        setShowPlaces(true)
        setQuery("")
    }
    return(
        <div className="airportinfo">
            <h1>Places to Airport ID</h1>
            <p>Enter a state, country, or city to search for your Airport ID</p>
           <form onSubmit={handleSubmit}>
                <label htmlFor="queryInput">State, Country, or City:</label>
                <input id="queryInput" value={query} onChange={e => setQuery(e.target.value)} required/>
                <button className="search">Search</button>
           </form>
           { showPlaces ? <Places places={places}></Places> : <></>}
        </div>
    )
}

export default AirportInfo;
