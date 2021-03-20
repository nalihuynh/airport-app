import React, { useState } from 'react';
import './RoutesInfo.css';
import Routes from './Routes';

function RoutesInfo() { 
    const [quotes,setQuotes] = useState([])
    const [carriers,setCarriers] = useState([])
    const [places,setPlaces] = useState([])
    const [currencies,setCurrencies] = useState([])
    const [showRoutes,setShowRoutes] = useState(false)
    
    const [originPlace, setOrigin] = useState("")
    const [destinationPlace, setDestination] = useState("")
    const [outboundDate, setDate] = useState("")
    const [currency, setCurrency] = useState("")


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
            let response = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/${currency}/en-US/${originPlace}/${destinationPlace}/${outboundDate}`, reqOptions)
            response = await response.json()
            console.log(response)
            setQuotes(response.Quotes)
            setCarriers(response.Carriers)
            setPlaces(response.Places)
            setCurrencies(response.Currencies)
        }
        fetchMyAPI()
        setShowRoutes(true)
    }


    return(
        <div className="routesinfo"> 
        <h1>Flights</h1>
            <ol>
                <li>Find origin place <mark class = "red">Airport ID</mark> and destination place <mark class = "red">Airport ID</mark> above</li>
                <li>Format outbound date as <mark class = "red">"yyyy-mm-dd", "yyyy-mm", or "anytime"</mark></li>
                <li>Enter your currency as a <mark class = "red">3-Letter code </mark>(ex. USD, EUR, CAD, etc.)</li>
            </ol>
            
                <form onSubmit={handleSubmit}>
                <div class="forminfo">
                    <div class="formrow">
                        <label htmlFor="queryInput">Origin Place:</label>
                        <input id="queryInput" value={originPlace} onChange={e => setOrigin(e.target.value)} required/>

                        <label htmlFor="queryInput">Destination Place:</label>
                        <input id="queryInput" value={destinationPlace} onChange={e => setDestination(e.target.value)} required/>
                    </div>
                    
                    <div class="formrow">
                        <label htmlFor="queryInput">Outbound Date:</label>
                        <input id="queryInput" value={outboundDate} onChange={e => setDate(e.target.value)} required/>

                        <label htmlFor="queryInput">Currency:</label>
                        <input id="queryInput" value={currency} onChange={e => setCurrency(e.target.value)} required/>
                    </div>
                </div>
                <button className="search">Search</button>

            </form>
            
           
           { showRoutes ? <Routes quotes={quotes} carriers={carriers} places={places} currencies={currencies}></Routes> : <></>}
        </div>
    )

}

export default RoutesInfo;
