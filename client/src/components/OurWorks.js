import { Card, Icon, Row, Col } from 'react-materialize';
import kfc from './images/kfc.png';
import titan from './images/titan.png';
import fastrack from './images/fastrack.png';
import uber from './images/uber.png';
import cadbury from './images/cadbury.png';
import ihh from './images/ihh.png';
import al from './images/AshokLeyland.png';
import ck from './images/Chicking.png';
import d from './images/damro.png';
import dc from './images/Duracell.png';
import ey from './images/EY.png';
import cs from './images/convosight.png';
import fc from './images/FreeCharge.png';
import a from './images/asus.png';
import hp from './images/hp.png';
import i from './images/indusind.png';
import hero from './images/Hero.png';
import ff from './images/filmfare.png';



function OurWorks() {

    return (
        <div id="ourWorksPageBg" className="ourWorksPage">
            <div id="main-content" className="container">
                <h1 className="center section-heading">Our Works</h1>
                <Row>
                    <Col l={3} m={4} s={12}>
                        <a href="#!" className="" key="1" target='_blank' rel="noreferrer">
                            <Card
                                className="center-align worksCard"
                                closeIcon={<Icon></Icon>}
                                reveal={<img src={kfc} className="responsive-img" alt="kfc" />}
                            >
                                <>
                                    <h4 className="worksHeading">KFC Motion Graphic Campaign</h4>
                                    {/* <p>Here is some more information about this product that is only revealed once clicked on.</p> */}
                                </>
                            </Card>
                        </a>
                    </Col>
                    <Col l={3} m={4} s={12}>
                        <a href="https://www.youtube.com/watch?v=DaUYJXjo9vw" className="" key="1" target='_blank' rel="noreferrer">
                            <Card
                                className="center-align"
                                closeIcon={<Icon></Icon>}
                                reveal={<img src={titan} className="responsive-img" alt="titan" />}
                            >
                                <>
                                    <h4 className="worksHeading">Titan Solidarity</h4>
                                    {/* <p>Adipisicing fugiat est ullamco et ipsum eu labore incididunt voluptate sit culpa culpa aute.</p> */}
                                </>
                            </Card>
                        </a>
                    </Col>
                    <Col l={3} m={4} s={12}>
                        <a href="#!" className="" key="1" target='_blank' rel="noreferrer">
                            <Card
                                className="center-align"
                                closeIcon={<Icon></Icon>}
                                reveal={<img src={fastrack} className="responsive-img" alt="fastrack" />}
                            >
                                <>
                                    <h4 className="worksHeading">Fastrack Print Marketing Bangalore</h4>
                                    {/* <p>Adipisicing fugiat est ullamco et ipsum eu labore incididunt voluptate sit culpa culpa aute.</p> */}
                                </>
                            </Card>
                        </a>
                    </Col>
                    <Col l={3} m={4} s={12}>
                        <a href="#!" className="" key="1" target='_blank' rel="noreferrer">
                            <Card
                                className="center-align"
                                closeIcon={<Icon></Icon>}
                                reveal={<img src={uber} className="responsive-img" alt="uber" />}
                            >
                                <h4 className="worksHeading">Uber Social Media Ad Campaign</h4>
                                {/* <p>Adipisicing fugiat est ullamco et ipsum eu labore incididunt voluptate sit culpa culpa aute.</p> */}
                            </Card>
                        </a>
                    </Col>
                    <Col l={3} m={4} s={12}>
                        <a href="#!" className="" key="1" target='_blank' rel="noreferrer">
                            <Card
                                className="center-align"
                                closeIcon={<Icon></Icon>}
                                reveal={<img src={cadbury} className="responsive-img" alt="cadbury" />}
                            >
                                <>
                                    <h4 className="worksHeading">Cadbury Valentine Snippet</h4>
                                    {/* <p>Adipisicing fugiat est ullamco et ipsum eu labore incididunt voluptate sit culpa culpa aute.</p> */}
                                </>
                            </Card>
                        </a>
                    </Col>
                    <Col l={3} m={4} s={12}>
                        <a href="#!" className="" key="1" target='_blank' rel="noreferrer">
                            <Card
                                className="center-align worksCard"
                                closeIcon={<Icon></Icon>}
                                reveal={<img src={ihh} className="responsive-img" alt="ihh" />}
                            >
                                <>
                                    <h4 className="worksHeading">IHH Healthcare Corporate Video</h4>
                                    {/* <p>Adipisicing fugiat est ullamco et ipsum eu labore incididunt voluptate sit culpa culpa aute.</p> */}
                                </>
                            </Card>
                        </a>
                    </Col>
                </Row>
            </div>

            <div className="box-shadow">
                <div id="main-content" className="container">
                    <h1 className="center section-heading">Clients</h1>
                    <Row className="center-align">
                        <Col l={3} m={4} s={12}>
                            <img alt="logo" src={al} width=" 130px" className="client-logo" />
                        </Col>
                        <Col l={3} m={4} s={12}>
                            <img alt="logo" src={ck} width=" 130px" className="client-logo" />
                        </Col>
                        <Col l={3} m={4} s={12}>
                            <img alt="logo" src={d} width=" 130px" className="client-logo" />
                        </Col>
                        <Col l={3} m={4} s={12}>
                            <img alt="logo" src={dc} width=" 130px" className="client-logo" />
                        </Col>
                    </Row>
                    <Row className="center-align">
                        <Col l={3} m={4} s={12}>
                            <img alt="logo" src={ey} width=" 130px" className="client-logo" />
                        </Col>
                        <Col l={3} m={4} s={12}>
                            <img alt="logo" src={cs} width=" 130px" className="client-logo" />
                        </Col>
                        <Col l={3} m={4} s={12}>
                            <img alt="logo" src={fc} width=" 130px" className="client-logo" />
                        </Col>
                        <Col l={3} m={4} s={12}>
                            <img alt="logo" src={a} width=" 130px" className="client-logo" />
                        </Col>
                    </Row>
                    <Row className="center-align">
                        <Col l={3} m={4} s={12}>
                            <img alt="logo" src={hp} width=" 130px" className="client-logo" />
                        </Col>
                        <Col l={3} m={4} s={12}>
                            <img alt="logo" src={i} width=" 130px" className="client-logo" />
                        </Col>
                        <Col l={3} m={4} s={12}>
                            <img alt="logo" src={hero} width=" 130px" className="client-logo" />
                        </Col>
                        <Col l={3} m={4} s={12}>
                            <img alt="logo" src={ff} width=" 130px" className="client-logo" />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default OurWorks;