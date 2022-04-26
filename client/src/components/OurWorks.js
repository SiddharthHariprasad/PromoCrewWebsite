import { Card, Icon, Row, Col, CardTitle} from 'react-materialize';
import kfc from './images/kfc.png';
import titan from './images/titan.png';
import fastrack from './images/fastrack.png';
import uber from './images/uber.png';
import cadbury from './images/cadbury.png';
import ihh from './images/ihh.png';

function OurWorks() {

    return(
            <div id="main-content" className="container ourWorksPage">
                <h1 className="center">Our Works</h1>
                <Row>
                    <Col m={4} s={12}>
                        <a href="#!" className="red-text text-accent-1" key="1">
                            <Card
                                className="red lighten-1 white-text center-align"
                                closeIcon={<Icon></Icon>}
                                reveal={<img src={kfc} width="200px" height="75px"/>}
                            >
                                <>
                                        <h6>KFC Motion Graphic Campaign</h6>
                                        <p>Here is some more information about this product that is only revealed once clicked on.</p>    
                                </>
                            </Card>
                        </a>
                    </Col>
                    <Col m={4} s={12}>
                        <a href="#!" className="red-text text-accent-1" key="1">
                            <Card
                                className="red lighten-1 white-text center-align"
                                closeIcon={<Icon></Icon>}
                                reveal={<img src={titan} width="200px" height="75px"/>}
                            >
                                <>
                                    <h6>Titan Solidarity</h6>
                                    <p>Adipisicing fugiat est ullamco et ipsum eu labore incididunt voluptate sit culpa culpa aute.</p>
                                </>
                            </Card>
                        </a>
                    </Col>
                    <Col m={4} s={12}>
                        <a href="#!" className="red-text text-accent-1" key="1">
                            <Card
                                className="red lighten-1 white-text center-align"
                                closeIcon={<Icon></Icon>}
                                reveal={<img src={fastrack} width="200px" height="75px"/>}
                            >
                                <>
                                    <h6>Fastrack Print Marketing Bangalore</h6>
                                    <p>Adipisicing fugiat est ullamco et ipsum eu labore incididunt voluptate sit culpa culpa aute.</p>
                                </>
                        </Card>
                    </a>
                    </Col>
                </Row>
                <Row>
                    <Col m={4} s={12}>
                        <a href="#!" className="red-text text-accent-1" key="1">
                            <Card
                                className="red lighten-1 white-text center-align"
                                closeIcon={<Icon></Icon>}
                                reveal={<img src={uber} width="200px" height="75px"/>}
                            >
                            <h6>Uber Social Media Ad Campaign</h6>
                            <p>Adipisicing fugiat est ullamco et ipsum eu labore incididunt voluptate sit culpa culpa aute.</p>
                            </Card>
                        </a>
                    </Col>
                    <Col m={4} s={12}>
                        <a href="#!" className="red-text text-accent-1" key="1">
                            <Card
                                className="red lighten-1 white-text center-align"
                                closeIcon={<Icon></Icon>}
                                reveal={<img src={cadbury} width="200px" height="75px"/>}
                            >
                                <>
                                    <h6>Cadbury Valentine Snippet</h6>
                                    <p>Adipisicing fugiat est ullamco et ipsum eu labore incididunt voluptate sit culpa culpa aute.</p>
                                </>
                            </Card>
                        </a>
                    </Col>
                    <Col m={4} s={12}>
                        <a href="#!" className="red-text text-accent-1" key="1">
                            <Card
                                className="red lighten-1 white-text center-align"
                                closeIcon={<Icon></Icon>}
                                reveal={<img src={ihh} width="150px" height="80px"/>}
                            >
                                <>
                                    <h6>IHH Healthcare Corporate Video</h6>
                                    <p>Adipisicing fugiat est ullamco et ipsum eu labore incididunt voluptate sit culpa culpa aute.</p>
                                </>
                            </Card>
                        </a>
                    </Col>
                </Row>
            </div>
    );
}

export default OurWorks;