import React from 'react'
import { Card } from 'react-materialize';

const Order = ({ order }) => {

    const startDate = new Date(order.orderStartDate);
    const endDate = new Date(order.orderEndDate);
    const startDateString = `${startDate.getDate().toString()}/${startDate.getMonth()}/${startDate.getFullYear()}`;
    const endDateString = `${endDate.getDate().toString()}/${endDate.getMonth()}/${endDate.getFullYear()}`;
    const startTimeString = startDate.toLocaleTimeString();
    const endTimeString = endDate.toLocaleTimeString();

    const cab = () => {
        return(
            <div>
                <h4 className="white-text">{order.driverName}</h4>
                <ul className="cab">
                    <li><b>Car: </b>{order.carModel}</li>
                    <li><b>Languages Known: </b><br/>{order.driverLanguages.map((language) => (<span key={language}>&#128483;{language}&nbsp;</span>))}</li>
                    <li><b>Experience: </b> {order.driverExperience} years</li>
                    <li><b>Age: </b> {order.driverAge}</li>
                    <li><b>Availability: </b><br />{order.driverAvailability.map((availability) => (<span key={availability}>&#128197;{availability}&nbsp;</span>))}</li>
                    <li className="white-text"><b>Cost: &#8377;{order.driverCost}/8hrs</b></li>
                </ul>
            </div>
        );
    }

    const guide = () => {
        return(
            <div>
                <h4 className="white-text">{order.guideName}</h4>
                <h6 className="white-text">Guide ID - {order.guideID}</h6>
                <ul className="guide">
                    <li><b>Languages Known: </b><br />{order.guideLanguages.map((language) => (<span key={language}>&#128483;{language}&nbsp;</span>))}</li>
                    <li><b>Experience: </b> {order.guideExperience} years</li>
                    <li><b>Age: </b> {order.guideAge}</li>
                    <li><b>Availability: </b> {order.guideAvailability.map((availability) => (<span key={availability}>&#128197;{availability}&nbsp;</span>))}</li>
                    <li className="white-text"><b>Cost: &#8377;{order.guideCost}/8hrs</b></li>
                </ul>
            </div>
        );
    }

    const pack = () => {
        return(
                <ul>
                    <li><b>Ticket ID: </b>{order.ticketID}</li>
                    <li><b>Hotel ID: </b>{order.hotelID}</li>
                    <li><b>Room ID: </b>{order.roomID}</li>
                    <li><b>Cab ID: </b>{order.cabID}</li>
                    <li><b>Guide ID: </b>{order.guideID}</li>
                    <li className="white-text"><b>Cost: &#8377;{order.packCost}</b></li>
                </ul>
        );
    }

    const hotel = () => {
        return(
            <div>
                <h5 className="white-text">{order.hotelName}</h5>
                {order.roomType} Room <br />
                <b>Facilities: </b><ul>{order.facilities.map((facility) => (<li key={facility}>&#9899;{facility}</li>))}</ul>
                <span className="white-text"><b>Cost: &#8377;{order.roomCost}</b></span>
            </div>
        );
    }

    const ticket = () => {
        return(
            <div>
                <span><b>Departure Date: </b> {order.date} </span><br />
                <span><b>Departure Time: </b> {order.time} </span><br />
                <span><b>Seats Available: </b> {order.seatsAvailable} </span><br />
                <span className="white-text"><b>Cost: &#8377;{order.ticketCost} </b></span>
            </div>
        );
    }

    const titleSelector = () => {
        switch (order.orderCategory) {
            case 'cab':
                return order.cabID;
            case 'guide':
                return order.guideID;
            case 'hotel':
                return `${order.hotelID} | Room ID - ${order.roomID}`;
            case 'pack':
                return order.packID;
            case 'ticket':
                return order.ticketID;
            default:
                break;
                
        }
    }
    
    const selector = () => {
        switch (order.orderCategory) {
            case 'cab':
                return cab();
            case 'guide':
                return guide();
            case 'hotel':
                return hotel();
            case 'pack':
                return pack();
            case 'ticket':
                return ticket();
            default:
                break;
                
        }
    }

    return(
        <Card
            className="black teal-text text-accent-4 left-align"
            title={<>{order.orderCategory.slice(0,1).toUpperCase()}{order.orderCategory.slice(1)} ID - {titleSelector()}</>}
        >
            {selector()}
            {order.orderCategory !== 'ticket'? 
                <>
                    <b className="white-text">From</b> {startDateString} <b className="white-text">at</b> {startTimeString}<br />
                    <b className="white-text">To</b> {endDateString} <b className="white-text">at</b> {endTimeString}
                </>
                :null
            }
        </Card>
    );

}

export default Order;