import React, { useState } from 'react';
import { Card, CardTitle, Icon } from 'react-materialize';
import { useDispatch } from 'react-redux';
import { putCart } from '../../../actions/carts';


const Pack = ({ pack }) => {

    const [cartData] = useState({
        cartCategory: 'pack', packID: pack.packID, packName: pack.packName, packDetails: pack.packDetails, ticketID: pack.ticketID, hotelID: pack.hotelID, roomID: pack.roomID, cabID: pack.cabID, guideID: pack.guideID, packCost: pack.packCost
    });

    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('profile'));

    
    const addToCart = () => {
        if (user?.result) {
            dispatch(putCart(cartData));
            alert(`Package with ID ${pack.packID} has been aded to cart.`);
            window.open("/Packages", "_self");
        } else {
            alert("Please login to add to cart.");
        }
    }
    return (
        <Card
            className="black teal-text text-accent-4"
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image={pack.packPhoto} reveal waves="light">{pack.packName}</CardTitle>}
            reveal={
                <>
                    <span>Here is some more information about {pack.packName}.</span>
                    <ul>
                        <li><b>Ticket ID: </b>{pack.ticketID}</li>
                        <li><b>Hotel ID: </b>{pack.hotelID}</li>
                        <li><b>Room ID: </b>{pack.roomID}</li>
                        <li><b>Cab ID: </b>{pack.cabID}</li>
                        <li><b>Guide ID: </b>{pack.guideID}</li>
                        <li className="white-text"><b>Cost: &#8377;{pack.packCost}</b></li>
                    </ul>
                </>}
            revealIcon={<Icon>more_vert</Icon>}
            title={
                <>
                    {pack.packName}
                    <h6 className="white-text">Package ID - {pack.packID}</h6>
                </>
            }
            actions={[
                <a href="#!" className="teal-text text-accent-1" key="1" onClick={addToCart}><Icon>add_shopping_cart</Icon>&nbsp;Add to Cart</a>
            ]}
            >
               <span>{pack.packDetails}</span> 
        </Card>
    );
};

export default Pack;