import { Row, Col, Icon, Card, CardTitle} from 'react-materialize';
import b from './images/branding.png';
import cd from './images/contentdesign.png';
import cm from './images/contentmarketing.png';
import dm from './images/digitalmarketing.png';
import prs from './images/prservices.png';


function services() {

    return(
        <div id="servicesPageBg" className="serivcesPage">
            <div id="main-content" className="container">
                <h1 className="center">Services</h1>
                <Row>
                    <Col l={3} m={4} s={12}>
                        <Card
                            className="center-align servicesCard"
                            closeIcon={<Icon></Icon>}
                            header={<CardTitle image={b} reveal waves="light"/>}
                            reveal={
                                <>
                                    <h6>Branding</h6>
                                    <p>
                                        We offer all services in building a brand identity and brand presence for your product or service.
                                    </p>
                                </>
                            }
                        >
                        </Card>
                    </Col>
                    <Col l={3} m={4} s={12}>
                        <Card
                            className="center-align"
                            closeIcon={<Icon></Icon>}
                            header={<CardTitle image={cd} reveal waves="light"/>}
                            reveal={
                                <>
                                    <h6>Content Design</h6>
                                    <p>
                                        Our team will work to understand your requirements and audience to create the most effective content in order to reach your goals.
                                    </p>
                                </>
                            }
                        >
                        </Card>
                    </Col>
                    <Col l={3} m={4} s={12}>
                        <Card
                            className="center-align"
                            closeIcon={<Icon></Icon>}
                            header={<CardTitle image={cm} reveal waves="light"/>}
                            reveal={
                                <>
                                    <h6>Content Marketing</h6>
                                    <p>
                                        We develop and execute tailored marketing strategies to ensure your product reaches your target demographic efficiently.
                                    </p>
                                </>
                            }
                        >
                        </Card>
                    </Col>
                    <Col l={3} m={4} s={12}>
                        <Card
                            className="center-align"
                            closeIcon={<Icon></Icon>}
                            header={<CardTitle image={dm} reveal waves="light"/>}
                            reveal={
                                <>
                                    <h6>Digital Marketing</h6>
                                    <p>
                                        Our elite team will take care of all your digital marketing requirements from social media handling to content creation and marketing to ensure your goals are always met.
                                    </p>
                                </>
                            }
                        >
                        </Card>
                    </Col>
                    <Col l={3} m={4} s={12}>
                        <Card
                            className="center-align"
                            closeIcon={<Icon></Icon>}
                            header={<CardTitle image={prs} reveal waves="light"></CardTitle>}
                            reveal={
                                <>
                                    <h6>PR Services</h6>
                                    <p>
                                        Our team offers various public relations services to help maintain and grow your brand's reputation and reach.
                                    </p>
                                </>
                            }
                        >
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default services;