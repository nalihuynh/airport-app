import React, { useState } from 'react';
import './AirportInfo.css';
import Places from './Places';

function AirportInfo() { 
    const [places,setPlaces] = useState([])
    const [query,setQuery] = useState("")
    const [showPlaces,setShowPlaces] = useState(false)
    const [originPlace, setOrigin] = useState("")
    const [destinationPlace, setDestination] = useState("")
    const [outboundDate, setDate] = useState("")

    // make hooks for first dest and second dest and date
    // showRoutes

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
            // make these hooks
            // const originplace = "SFO-sky"
            // const destinationplace = "ORD-sky"
            // const outbounddate = "anytime"
            let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?" + new URLSearchParams({query: query}), reqOptions)
            // let response = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${originPlace}/${destinationPlace}/${outboundDate}` , reqOptions)
            //+ new URLSearchParams({originplace: "SFO-sky", destinationplace: "ORD-sky", outboundpartialdate: "anytime"}), reqOptions)
            //+ new URLSearchParams({query: {"inboundpartialdate": "2019-12-01"}}), reqOptions)
            response = await response.json()
            console.log(response.Places)
            setPlaces(response.Places)
        }
        fetchMyAPI()
        setShowPlaces(true)
        setQuery("")
    }

    // <input id="originInput" value={originplace} onChange={e => setOrigin(e.target.value)} required/>

    return(
        // add more to the form, add first destination, second destination, and date
        // change value = {query} to value = {first dest., etc.}
        <div className="airportinfo"> 
           <form onSubmit={handleSubmit}>
                <label htmlFor="queryInput">State, Country, or City:</label>
                <input id="queryInput" value={query} onChange={e => setQuery(e.target.value)} required/>
                <button className="search">Submit</button>
           </form>
           { showPlaces ? <Places places={places}></Places> : <></>}
        </div>
    )
}

export default AirportInfo;
