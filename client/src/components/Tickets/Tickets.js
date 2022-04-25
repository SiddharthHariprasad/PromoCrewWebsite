import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTickets } from '../../actions/tickets';
import { useSelector } from 'react-redux';
import Ticket from './Ticket/Ticket'
import { Col, Preloader, Row } from 'react-materialize';

function Tickets() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTickets());
    }, [dispatch]);

    const tickets = useSelector((state) => state.tickets);

    return(
        !tickets.length ?
            <div id="main-content" className="loaderPage">
                <Preloader active size="big" flashing={false} color="green" /> 
            </div>
        :(
            <div id="main-content" className="container">
                <h1 className="center">Tickets</h1>
                <Row>
                    {tickets.map((ticket) => (
                        <Col key={ticket._id} s={12} m={6}>
                            <Ticket ticket={ticket} />
                        </Col>
                    ))}
                </Row>
            </div>
        )
    );
}

export default Tickets;