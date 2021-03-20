import React from 'react';
import './Routes.css';

function Routes(props) { 
    const symbol = props.currencies[0] ? props.currencies[0].Symbol : ""
    function getCarrierName(carrierId){
        let carrierName = ""
        props.carriers.forEach(carrier => {
            if (carrier.CarrierId === carrierId){
                carrierName = carrier.Name
            }
        });
        return carrierName
    }

    function getPlaceName(placeId){
        let placeName = ""
        props.places.forEach(place => {
            if (place.PlaceId === placeId){
                placeName = place.Name
            }
        });
        return placeName
    }

    return(
        <div className="routes">
            <table>
                <thead>
                    <tr>
                        <th>Prices</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Departure Date</th>
                        <th>Carrier Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.quotes.map(quote => {
                        return (<tr id={quote.QuoteId}>
                            <th>{`${symbol}${quote.MinPrice}`}</th>
                            <th>{getPlaceName(quote.OutboundLeg.OriginId)}</th>
                            <th>{getPlaceName(quote.OutboundLeg.DestinationId)}</th>
                            <th>{quote.OutboundLeg.DepartureDate.slice(0, -9)}</th>
                            <th>{getCarrierName(quote.OutboundLeg.CarrierIds[0])}</th>
                        </tr>)
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default Routes;