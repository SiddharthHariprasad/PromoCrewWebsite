import React, { useState } from 'react';
import { Card, Icon } from 'react-materialize';
import { useDispatch } from 'react-redux';
import { putCart } from '../../../actions/carts';


const Ticket = ({ ticket }) => {

    const [cartData] = useState({
        cartCategory: 'ticket', ticketID: ticket.ticketID, ticketType: ticket.ticketType, departure: ticket.departure, destination: ticket.destination, seatsAvailable: ticket.seatsAvailable, date: ticket.date, time: ticket.time, ticketCost: ticket.ticketCost
    });

    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('profile'));

    const addToCart = () => {
        if (user?.result) {
            dispatch(putCart(cartData));
            alert(`Ticket with ID ${ticket.ticketID} has been added to cart.`);
            window.open("/Tickets", "_self");
        } else {
            alert("Please login to add to cart.");
        }
    }

    return (
        <Card
            actions={[
                <a href="#!" className="teal-text text-accent-1" key="1" onClick={addToCart}><Icon>add_shopping_cart</Icon>&nbsp;Add to Cart</a>
            ]}
            className="black"
            textClassName="white-text"
        >
            <div className="ticket-title">
                <span><b>From:</b>&nbsp;<i>{ticket.departure}</i>&nbsp;&nbsp;----&gt;&nbsp;&nbsp;<b>To:</b> <i>{ticket.destination}</i></span>
                <br />
                <span className="white-text ticketType"><b>(&nbsp;{ticket.ticketType}&nbsp;)</b></span><br />
            </div>
            <h6 className="white-text">Ticket ID - {ticket.ticketID}</h6>
            <div className="teal-text">
                <span><b>Departure Date: </b> {ticket.date} </span><br />
                <span><b>Departure Time: </b> {ticket.time} </span><br />
                <span><b>Seats Available: </b> {ticket.seatsAvailable} </span><br />
                <span className="white-text"><b>Cost: &#8377;{ticket.ticketCost} </b></span>
            </div>
        </Card>
    );
};

export default Ticket;