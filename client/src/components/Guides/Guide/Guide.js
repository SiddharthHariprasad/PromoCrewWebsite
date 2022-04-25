import React, { useState } from 'react';
import { Card, CardTitle, Icon } from 'react-materialize';
import { useDispatch } from 'react-redux';
import { putCart } from '../../../actions/carts';

const Guide = ({ guide }) => {

    const [cartData] = useState({
        cartCategory: 'guide', guideID: guide.guideID, guideName: guide.guideName, guideLanguages: guide.guideLanguages, guideExperience: guide.guideExperience, guideAge: guide.guideAge, guideAvailability: guide.guideAvailability, guideCost: guide.guideCost, guideLocation: guide.guideLocation
    });

    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('profile'));

    const addToCart = () => {
        if (user?.result) {
            dispatch(putCart(cartData));
            alert(`Guide with ID ${guide.guideID} has been added to cart.`);
            window.open("/Guides","_self");
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
            header={<CardTitle image={guide.guidePhoto}></CardTitle>}
        >
            <h4 className="white-text">{guide.guideName}</h4>
            <h6 className="white-text">Guide ID - {guide.guideID}</h6>
            <ul className="guide">
                <li><b>Languages Known: </b><br />{guide.guideLanguages.map((language) => (<span key={language}>&#128483;{language}&nbsp;</span>))}</li>
                <li><b>Experience: </b> {guide.guideExperience} years</li>
                <li><b>Age: </b> {guide.guideAge}</li>
                <li><b>Availability: </b> {guide.guideAvailability.map((availability) => (<span key={availability}>&#128197;{availability}&nbsp;</span>))}</li>
                <li><b>Location: </b> {guide.guideLocation}</li>
                <li className="white-text"><b>Cost: &#8377;{guide.guideCost}/8hrs</b></li>
            </ul>
        </Card>
    );
};

export default Guide;