import { Card, Icon, Row, Col, CardTitle} from 'react-materialize';
import kfc from './images/kfc.png';


function OurWorks() {

    return(
        <div id="main-content">
            <div id="main-content" className="container">
                <h1 className="center">Our Works</h1>
                <Row>
                    <Col
                        m={6}
                        s={12}
                    >
                        <Card
                            className="black white-text text-accent-4 center-align"
                            actions={[ 
                                <a href="#!" className="red-text text-accent-1" key="1" onClick=""><Icon>ondemand_video</Icon>&nbsp;Watch Video</a>
                            ]}
                            header={<CardTitle image={kfc}>KFC</CardTitle>}
                            revealIcon={<Icon>more_vert</Icon>}>
                            <p>Voluptate ipsum irure dolore voluptate amet pariatur consectetur. Pariatur pariatur ex ut aliqua. Veniam Lorem laborum ad ullamco elit eiusmod voluptate laborum consectetur velit nostrud veniam sunt minim. Reprehenderit esse nulla exercitation in commodo laborum aliquip non culpa id exercitation. Pariatur laborum id incididunt ea. Mollit commodo excepteur nisi irure voluptate voluptate. Ipsum voluptate culpa nisi eu quis in aute commodo incididunt.</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>

    );
}

export default OurWorks;