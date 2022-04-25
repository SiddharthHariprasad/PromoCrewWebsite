import React, { useState } from 'react';
import { Card, CardTitle, Icon } from 'react-materialize';
import { useDispatch } from 'react-redux';
import { putCart } from '../../../actions/carts';

const Hotel = ({ hotel }) => {

    const [cartData] = useState({
        cartCategory: 'hotel', hotelID: hotel.hotelID, roomID: hotel.roomID, hotelName: hotel.hotelName, hotelDetails: hotel.hotelDetails, roomType: hotel.roomType, facilities: hotel.facilities, roomAvailability: hotel.roomAvailability, roomCost: hotel.roomCost
    });

    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('profile'));

    const addToCart = () => {
        if (user?.result) {
            dispatch(putCart(cartData));
            alert(`Room with ID ${hotel.roomID} from Hotel with ID ${hotel.roomID} has been added to cart.`);
            window.open("/Hotels","_self");
        } else {
            alert("Please login to add to cart.");
        }
    }
    
    return (
        <Card
            className="black teal-text text-accent-4"
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image={hotel.hotelPhoto} alt="hotel" reveal waves="light">{hotel.hotelName}</CardTitle>}
            reveal={
                <>
                    <img alt="room" src={hotel.roomPhoto}  width="100%"/>
                    <b>Facilities: </b><ul>{hotel.facilities.map((facility) => (<li key={facility}>&#9899;{facility}</li>))}</ul>
                    <span className="white-text"><b>Cost: &#8377;{hotel.roomCost}</b></span>
                </>}
            revealIcon={<Icon>more_vert</Icon>}
            title={
                <>
                    {hotel.roomType} Room
                    <h6 className="white-text">Hotel ID - {hotel.hotelID} | Room ID - {hotel.roomID}</h6>
                </>
            }
            actions={[
                <a href="#!" className="teal-text text-accent-1" key="1" onClick={addToCart}><Icon>add_shopping_cart</Icon>&nbsp;Add to Cart</a>
            ]}
            >
                {hotel.hotelDetails}
        </Card>
    );
};

export default Hotel;