import { Card, Icon, Row, Col, CardTitle} from 'react-materialize';
import kfc from './images/kfc.png';
import titan from './images/titan.png';
import fastrack from './images/fastrack.png';
import uber from './images/uber.png';
import cadbury from './images/cadbury.png';
import ihh from './images/ihh.png';

function OurWorks() {

    return(
        <div id="main-content">
            <div id="main-content" className="container">
                <h1 className="center">Our Works</h1>
                <Row>
                    <Col m={3} s={6}>
                        <Card
                            className="black white-text text-accent-4 center-align"
                            actions={[ 
                                <a href="#!" className="red-text text-accent-1" key="1"><Icon>ondemand_video</Icon>&nbsp;Watch Video</a>
                            ]}
                            header={<CardTitle image={kfc}></CardTitle>}>
                            <h6>KFC Motion Graphic Campaign</h6>
                            <p>Adipisicing fugiat est ullamco et ipsum eu labore incididunt voluptate sit culpa culpa aute.</p>
                        </Card>
                    </Col>
                    <Col m={3} s={6}>
                        <Card
                            className="black white-text text-accent-4 center-align"
                            actions={[ 
                                <a href="#!" className="red-text text-accent-1" key="1"><Icon>ondemand_video</Icon>&nbsp;Watch Video</a>
                            ]}
                            header={<CardTitle image={titan}></CardTitle>}>
                                <h6>Titan Solidarity</h6>
                            <p>Adipisicing fugiat est ullamco et ipsum eu labore incididunt voluptate sit culpa culpa aute.</p>
                        </Card>
                    </Col>
                    <Col m={3} s={6}>
                        <Card
                            className="black white-text text-accent-4 center-align"
                            actions={[ 
                                <a href="#!" className="red-text text-accent-1" key="1"><Icon>ondemand_video</Icon>&nbsp;Watch Video</a>
                            ]}
                            header={<CardTitle image={fastrack}></CardTitle>}>
                            <h6>Fastrack Print Marketing Bangalore</h6>
                            <p>Adipisicing fugiat est ullamco et ipsum eu labore incididunt voluptate sit culpa culpa aute.</p>
                        </Card>
                    </Col>
                    <Col m={3} s={6}>
                        <Card
                            className="black white-text text-accent-4 center-align"
                            actions={[ 
                                <a href="#!" className="red-text text-accent-1" key="1"><Icon>ondemand_video</Icon>&nbsp;Watch Video</a>
                            ]}
                            header={<CardTitle image={uber}></CardTitle>}>
                            <h6>Uber Social Media Ad Campaign</h6>
                            <p>Adipisicing fugiat est ullamco et ipsum eu labore incididunt voluptate sit culpa culpa aute.</p>
                        </Card>
                    </Col>
                    <Col m={3} s={6}>
                        <Card
                            className="black white-text text-accent-4 center-align"
                            actions={[ 
                                <a href="#!" className="red-text text-accent-1" key="1"><Icon>ondemand_video</Icon>&nbsp;Watch Video</a>
                            ]}
                            header={<CardTitle image={cadbury}></CardTitle>}>
                            <h6>Cadbury Valentine Snippet</h6>
                            <p>Adipisicing fugiat est ullamco et ipsum eu labore incididunt voluptate sit culpa culpa aute.</p>
                        </Card>
                    </Col>
                    <Col m={3} s={6}>
                        <Card
                            className="black white-text text-accent-4 center-align"
                            actions={[ 
                                <a href="#!" className="red-text text-accent-1" key="1"><Icon>ondemand_video</Icon>&nbsp;Watch Video</a>
                            ]}
                            header={<CardTitle image={ihh}></CardTitle>}>
                            <h6>IHH Healthcare Corporate Video</h6>
                            <p>Adipisicing fugiat est ullamco et ipsum eu labore incididunt voluptate sit culpa culpa aute.</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default OurWorks;