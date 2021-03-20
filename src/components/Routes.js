import React from 'react';
import './Routes.css';

function Routes(props) { 

    return(
        <div className="routes">
            <table>
                <thead>
                    <tr>
                        <th>Price</th>
                        <th>Carrier Name</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Departure Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.responses.map(resp => {
                        return (<tr id={resp.Quotes.QuoteId}>
                            <th>{resp.Currencies.Symbolresp.Quotes.MinPrice}</th>
                            
                        </tr>)
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default Routes;