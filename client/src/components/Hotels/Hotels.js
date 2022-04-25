import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getHotels } from '../../actions/hotels';
import { useSelector } from 'react-redux';
import Hotel from './Hotel/Hotel';
import { Preloader, Row, Col } from 'react-materialize';

function Hotels() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHotels());
    }, [dispatch]);

    const hotels = useSelector((state) => state.hotels);

    return(
        !hotels.length ?
        <div id="main-content" className="loaderPage">
            <Preloader active size="big" flashing={false} color="green" />
        </div>
    : (
        <div id="main-content" className="container">
            <h1 className="center">Hotels</h1>
                <Row>
                {hotels.map((hotel) => (
                    <Col key={hotel._id} s={12} m={6}>
                        <Hotel hotel={hotel} />
                    </Col>
                ))}
            </Row>
        </div>
    )
    );
}

export default Hotels;