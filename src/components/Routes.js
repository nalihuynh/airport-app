import React from 'react';
import './Routes.css';

function Routes(props) { 
    function getCarrierName(carrierId){
        var carrierName = ""
        props.carriers.forEach(carrier => {
            if (carrier.CarrierId === carrierId){
                carrierName = carrier.Name
            }
        });
        return carrierName
    }

    function getPlaceName(placeId){
        var placeName = ""
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
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Prices</th>
                        <th>Carrier Id</th>
                        <th>Departure Date</th>
                        <th>Carrier Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.quotes.map(quote => {
                        return (<tr id={quote.QuoteId}>
                            <th>{getPlaceName(quote.OutboundLeg.OriginId)}</th>
                            <th>{getPlaceName(quote.OutboundLeg.DestinationId)}</th>
                            <th>{quote.MinPrice}</th>
                            <th>{quote.OutboundLeg.CarrierIds}</th>
                            <th>{quote.OutboundLeg.DepartureDate}</th>
                            <th>{getCarrierName(quote.OutboundLeg.CarrierIds[0])}</th>
                        </tr>)
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default Routes;