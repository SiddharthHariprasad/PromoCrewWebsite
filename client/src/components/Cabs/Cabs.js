import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCabs } from '../../actions/cabs';
import { useSelector } from 'react-redux';
import Cab from './Cab/Cab';
import { Col, Preloader, Row } from 'react-materialize';

function Cabs() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCabs());
    }, [dispatch]);

    const cabs = useSelector((state) => state.cabs);

    return(
        !cabs.length ?  
            <div id="main-content" className="loaderPage">
                <Preloader active size="big" flashing={false} color="green" />
            </div>
        : (
            <div id="main-content" className="container">
                <span id="addSuccess" hidden={true}>Item successfully added to cart.</span>
                <h1 className="center">Cabs</h1>
                <Row>
                    {cabs.map((cab) => (
                        <Col key={cab._id} s={12} m={6}>
                            <Cab cab={cab} />
                        </Col>
                    ))}
                </Row>
            </div>
        )
    );
}

export default Cabs;