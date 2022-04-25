import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGuides } from '../../actions/guides';
import { useSelector } from 'react-redux';
import Guide from './Guide/Guide';
import { Col, Preloader, Row } from 'react-materialize';

function Guides() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGuides());
    }, [dispatch]);

    const guides = useSelector((state) => state.guides);

    return(
        !guides.length ?  
            <div id="main-content" className="loaderPage">
                <Preloader active size="big" flashing={false} color="green" />
            </div>
        : (
            <div id="main-content" className="container">
                <h1 className="center">Guides</h1>
                <Row>
                    {guides.map((guide) => (
                        <Col key={guide._id} s={12} m={6}>
                            <Guide guide={guide} />
                        </Col>
                    ))}
                </Row>
            </div>
            
        )
    );
}

export default Guides;