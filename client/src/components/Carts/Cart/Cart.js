import React from 'react';
import { Card, Icon } from 'react-materialize';
import { useDispatch } from 'react-redux';
import { deleteCart } from '../../../actions/carts';

const Cart = ({ cart }) => {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        let removeSuccess = document.getElementById('removeSuccess');
        dispatch(deleteCart(cart._id));
        removeSuccess.removeAttribute('hidden');
        setTimeout(() => {removeSuccess.setAttribute('hidden',""); clear();}, 3000);
    }

    const clear = () => {
        window.open("/Cart", "_self");
    }

    const cab = () => {
        return(
            <div>
                <h4 className="white-text">{cart.driverName}</h4>
                <ul className="cab">
                    <li><b>Car: </b>{cart.carModel}</li>
                    <li><b>Languages Known: </b><br/>{cart.driverLanguages.map((language) => (<span key={language}>&#128483;{language}&nbsp;</span>))}</li>
                    <li><b>Experience: </b> {cart.driverExperience} years</li>
                    <li><b>Age: </b> {cart.driverAge}</li>
                    <li><b>Availability: </b><br />{cart.driverAvailability.map((availability) => (<span key={availability}>&#128197;{availability}&nbsp;</span>))}</li>
                    <li><b>Location: </b> {cart.driverLocation}</li>
                    <li className="white-text"><b>Cost: &#8377;{cart.driverCost}/8hrs</b></li>
                </ul>
            </div>
        );
    }

    const guide = () => {
        return(
            <div>
                <h4 className="white-text">{cart.guideName}</h4>
                <h6 className="white-text">Guide ID - {cart.guideID}</h6>
                <ul className="guide">
                    <li><b>Languages Known: </b><br />{cart.guideLanguages.map((language) => (<span key={language}>&#128483;{language}&nbsp;</span>))}</li>
                    <li><b>Experience: </b> {cart.guideExperience} years</li>
                    <li><b>Age: </b> {cart.guideAge}</li>
                    <li><b>Availability: </b> {cart.guideAvailability.map((availability) => (<span key={availability}>&#128197;{availability}&nbsp;</span>))}</li>
                    <li><b>Location: </b> {cart.guideLocation}</li>
                    <li className="white-text"><b>Cost: &#8377;{cart.guideCost}/8hrs</b></li>
                </ul>
            </div>
        );
    }

    const pack = () => {
        return(
                <ul>
                    <li><b>Ticket ID: </b>{cart.ticketID}</li>
                    <li><b>Hotel ID: </b>{cart.hotelID}</li>
                    <li><b>Room ID: </b>{cart.roomID}</li>
                    <li><b>Cab ID: </b>{cart.cabID}</li>
                    <li><b>Guide ID: </b>{cart.guideID}</li>
                    <li className="white-text"><b>Cost: &#8377;{cart.packCost}</b></li>
                </ul>
        );
    }

    const hotel = () => {
        return(
            <div>
                <h5 className="white-text">{cart.hotelName}</h5>
                {cart.roomType} Room <br />
                <b>Facilities: </b><ul>{cart.facilities.map((facility) => (<li key={facility}>&#9899;{facility}</li>))}</ul>
                <span className="white-text"><b>Cost: &#8377;{cart.roomCost}</b></span>
            </div>
        );
    }

    const ticket = () => {
        return(
            <div>
                <span><b>Departure Date: </b> {cart.date} </span><br />
                <span><b>Departure Time: </b> {cart.time} </span><br />
                <span><b>Seats Available: </b> {cart.seatsAvailable} </span><br />
                <span className="white-text"><b>Cost: &#8377;{cart.ticketCost} </b></span>
            </div>
        );
    }

    const titleSelector = () => {
        switch (cart.cartCategory) {
            case 'cab':
                return cart.cabID;
            case 'guide':
                return cart.guideID;
            case 'hotel':
                return `${cart.hotelID} | Room ID - ${cart.roomID}`;
            case 'pack':
                return cart.packID;
            case 'ticket':
                return cart.ticketID;
            default:
                break;
                
        }
    }
    
    const selector = () => {
        switch (cart.cartCategory) {
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
            actions={[
                <a href="#!" className="teal-text text-accent-1" key="1" onClick={removeFromCart}><Icon>delete</Icon> Remove from cart</a>
            ]}
            title={<>{cart.cartCategory.slice(0,1).toUpperCase()}{cart.cartCategory.slice(1)} ID - {titleSelector()}</>}
        > 
            {selector()}
        </Card>
    );
}

export default Cart;