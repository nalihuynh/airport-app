import React, { useState } from 'react';
import './RoutesInfo.css';
import Routes from './Routes';

function RoutesInfo() { 
    const [quotes,setQuotes] = useState([])
    const [carriers,setCarriers] = useState([])
    const [places,setPlaces] = useState([])
    const [currencies,setCurrencies] = useState([])
    const [responses, setResponses] = useState([])
    const [showRoutes,setShowRoutes] = useState(false)
    
    const [originPlace, setOrigin] = useState("")
    const [destinationPlace, setDestination] = useState("")
    const [outboundDate, setDate] = useState("")


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
            // console.log(originPlace)
            // console.log(destinationPlace)
            // console.log(outboundDate)
            // console.log(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${originPlace}/${destinationPlace}/${outboundDate}`)
            let response = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${originPlace}/${destinationPlace}/${outboundDate}`, reqOptions)
            response = await response.json()
            // console.log(response.Routes)
            console.log(response)
            setResponses(response)
            /*setQuotes(response.Quotes)
            setCarriers(response.Carriers)
            setPlaces(response.Places)
            setCurrencies(response.Currencies)*/
        }
        fetchMyAPI()
        setShowRoutes(true)
        setOrigin("")
        setDestination("")
        setDate("")
    }

    // <input id="originInput" value={originplace} onChange={e => setOrigin(e.target.value)} required/>

    return(
        // add more to the form, add first destination, second destination, and date
        // change value = {query} to value = {first dest., etc.}
        <div className="routesinfo"> 
           <form onSubmit={handleSubmit}>
                <label htmlFor="queryInput">Airport ID (Origin):</label>
                <input id="originInput" value={originPlace} onChange={e => setOrigin(e.target.value)} required/>

                <label htmlFor="queryInput">Airport ID (Destination):</label>
                <input id="destinationInput" value={destinationPlace} onChange={e => setDestination(e.target.value)} required/>

                <label htmlFor="queryInput">Outbound Date (yyyy-mm-dd):</label>
                <input id="dateInput" value={outboundDate} onChange={e => setDate(e.target.value)} required/>
                <button className="search">Submit</button>
           </form>
           { showRoutes ? <Routes quotes={quotes} carriers={carriers} places={places} currencies={currencies}></Routes> : <></>}
        </div>
    )
    // { showRoutes ? <Routes quotes={quotes} carriers={carriers} places={places} currencies={currencies}></Routes> : <></>}


}

export default RoutesInfo;
