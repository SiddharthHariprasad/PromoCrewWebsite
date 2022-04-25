import React, { useState } from 'react';
import { Card, CardTitle, Icon } from 'react-materialize';
import { useDispatch } from 'react-redux';
import { putCart } from '../../../actions/carts';


const Cab = ({ cab }) => {

    const [cartData] = useState({
        cartCategory: 'cab', cabID: cab.cabID, driverName: cab.driverName, carModel: cab.carModel, driverLanguages: cab.driverLanguages, driverExperience: cab.driverExperience, driverAge: cab.driverAge, driverAvailability: cab.driverAvailability, driverCost: cab.driverCost, driverLocation: cab.driverLocation
    });

    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('profile'));

    const addToCart = () => {
        if (user?.result) {
            dispatch(putCart(cartData));
            alert(`Cab with ID ${cab.cabID} has been added to cart.`);
            window.open("/Cabs","_self");
        } else {
            alert("Please login to add to cart.");
        }
    }

    return (
        <Card 
            className="black teal-text text-accent-4 left-align"
            actions={[
                <a href="#!" className="teal-text text-accent-1" key="1" onClick={addToCart}><Icon>add_shopping_cart</Icon>&nbsp;Add to Cart</a>
            ]}
            header={<CardTitle image={cab.driverPhoto}></CardTitle>}
        >
            <h4 className="white-text">{cab.driverName}</h4>
            <h6 className="white-text">Cab ID - {cab.cabID}</h6>
            <ul className="cab">
                <li><b>Car: </b>{cab.carModel}</li>
                <li><b>Languages Known: </b><br/>{cab.driverLanguages.map((language) => (<span key={language}>&#128483;{language}&nbsp;</span>))}</li>
                <li><b>Experience: </b> {cab.driverExperience} years</li>
                <li><b>Age: </b> {cab.driverAge}</li>
                <li><b>Availability: </b><br />{cab.driverAvailability.map((availability) => (<span key={availability}>&#128197;{availability}&nbsp;</span>))}</li>
                <li><b>Location: </b> {cab.driverLocation}</li>
                <li className="white-text"><b>Cost: &#8377;{cab.driverCost}/8hrs</b></li>
            </ul>
        </Card>
    );
};

export default Cab;