import { Card, Icon, Row, Col} from 'react-materialize';
import kfc from './images/kfc.png';
import titan from './images/titan.png';
import fastrack from './images/fastrack.png';
import uber from './images/uber.png';
import cadbury from './images/cadbury.png';
import ihh from './images/ihh.png';

function OurWorks() {

    return(
            <div id="ourWorksPageBg" className="ourWorksPage">
                <div id="box-shadow">
                    <div id="main-content" className="container">
                        <h1 className="center">Our Works</h1>
                        <Row>
                            <Col m={4} s={12}>
                                <a href="#!" className="red-text text-accent-1" key="1">
                                    <Card
                                        className="center-align"
                                        closeIcon={<Icon></Icon>}
                                        reveal={<img src={kfc} className="responsive-img"/>}
                                    >
                                        <>
                                                <h5>KFC Motion Graphic Campaign</h5>
                                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                        </>
                                    </Card>
                                </a>
                            </Col>
                            <Col m={4} s={12}>
                                <a href="#!" className="red-text text-accent-1" key="1">
                                    <Card
                                        className="center-align"
                                        closeIcon={<Icon></Icon>}
                                        reveal={<img src={titan} className="responsive-img"/>}
                                    >
                                        <>
                                            <h5>Titan Solidarity</h5>
                                            <p>Adipisicing fugiat est ullamco et ipsum eu labore incididunt voluptate sit culpa culpa aute.</p>
                                        </>
                                    </Card>
                                </a>
                            </Col>
                            <Col m={4} s={12}>
                                <a href="#!" className="red-text text-accent-1" key="1">
                                    <Card
                                        className="center-align"
                                        closeIcon={<Icon></Icon>}
                                        reveal={<img src={fastrack} className="responsive-img"/>}
                                    >
                                        <>
                                            <h5>Fastrack Print Marketing Bangalore</h5>
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
                                        className="center-align"
                                        closeIcon={<Icon></Icon>}
                                        reveal={<img src={uber} className="responsive-img"/>}
                                    >
                                    <h5>Uber Social Media Ad Campaign</h5>
                                    <p>Adipisicing fugiat est ullamco et ipsum eu labore incididunt voluptate sit culpa culpa aute.</p>
                                    </Card>
                                </a>
                            </Col>
                            <Col m={4} s={12}>
                                <a href="#!" className="red-text text-accent-1" key="1">
                                    <Card
                                        className="center-align"
                                        closeIcon={<Icon></Icon>}
                                        reveal={<img src={cadbury} className="responsive-img"/>}
                                    >
                                        <>
                                            <h5>Cadbury Valentine Snippet</h5>
                                            <p>Adipisicing fugiat est ullamco et ipsum eu labore incididunt voluptate sit culpa culpa aute.</p>
                                        </>
                                    </Card>
                                </a>
                            </Col>
                            <Col m={4} s={12}>
                                <a href="#!" className="red-text text-accent-1" key="1">
                                    <Card
                                        className="center-align"
                                        closeIcon={<Icon></Icon>}
                                        reveal={<img src={ihh} className="responsive-img"/>}
                                    >
                                        <>
                                            <h5>IHH Healthcare Corporate Video</h5>
                                            <p>Adipisicing fugiat est ullamco et ipsum eu labore incididunt voluptate sit culpa culpa aute.</p>
                                        </>
                                    </Card>
                                </a>
                            </Col>
                        </Row>
                    </div>
                </div>
                
                <h2>partnerships</h2>
                <div className='partnerships'>

                </div>
            </div>
    );
}

export default OurWorks;