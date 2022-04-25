import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPacks } from '../../actions/packs';
import { useSelector } from 'react-redux';
import Pack from './Package/Pack';
import { Col, Preloader, Row } from 'react-materialize';

function Packages() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPacks());
    }, [dispatch]);

    const packs = useSelector((state) => state.packs);
    
    return(
        !packs.length ?  
            <div id="main-content" className="loaderPage">
                <Preloader active size="big" flashing={false} color="green" />
            </div>
        : (
            <div id="main-content" className="container">
                <h1 className="center">Packages</h1>
                <Row>
                    {packs.map((pack) => (
                        <Col key={pack._id} s={12} m={6}>
                            <Pack pack={pack} />
                        </Col>
                    ))}
                </Row>
            </div>
        )
    );
}

export default Packages;