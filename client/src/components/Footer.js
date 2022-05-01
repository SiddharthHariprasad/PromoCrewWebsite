import React from 'react';
import { Modal, Button, Row, Col, Icon } from 'react-materialize';

const Footer = () =>{
    return(
        <footer className="page-footer black-text text-lighten-1">
            {/* container div for centering and targeting  */}
            <div className="container">
                {/* new row */}
                <Row>
                    {/* new column */}
                    <Col s={12} l={4} className="center">
                        {/*terms and conditions */}
                        <Modal id="termsandconditions" header="Terms &amp; Conditions" trigger={<Button className="red btn white-text center-align modal-trigger">TERMS &amp; CONDITIONS</Button>}>
                            <div className="modal-content">
                                <p>
                                    Please read the terms and conditions carefully before using services of our website.<br />Your access to and use of the service is conditioned on your acceptance of and compliance with these terms. These terms apply to all visitors, users and others who access or use our services.<br />By accessing or using the service, you agree to be bound by these terms. If you disagree with any pass of the terms then you may not access the service.<br /><b>Termination</b><br />We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason what’s over, including without limitation if you breach the terms.
                                </p>
                            </div>
                        </Modal>
                        <br /><br />
                        {/* privacy policy */}
                        <Modal id="privacypolicy" header="Privacy Policy" trigger={<Button className="red btn white-text center-align modal-trigger">PRIVACY POLICY</Button>}>
                            <div className="modal-content">
                                <p>
                                    This website is operated by PromoCrew] and whose registered address is [PromoCrew] we are committed to protecting and preserving the privacy of our visitors when visiting our site or communicating electronically with us.
                                </p>
                            </div>
                        </Modal>
                    </Col>
                    {/* contact us section */}
                    <Col s={12} l={4} className="contact-us center">
                        {/* heading for contact us section */}
                        <h5 className="white-text">Contact Us</h5>
                        {/* links to various contacting options */}
                        <a href="tel:+919074342615" className="red btn-floating btn-small">
                            <Icon>phone</Icon>
                        </a>&nbsp;
                        <a href="sms:+919074342615" className="red btn-floating btn-small">
                            <Icon>sms</Icon>
                        </a>&nbsp;
                        <a href="mailto:connect@promocrew.in" className="red btn-floating btn-small">
                            <Icon>mail</Icon>
                        </a>
                    </Col>
                    {/* social media section */}
                    <Col s={12} l={4} className="socials center">
                        {/* heading for social media icons */}
                        <h5 className="white-text">Connect with us on</h5>
                        {/* links to various social medias */}
                        {/* <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="red btn-floating btn-small">
                            <i className="fab fa-instagram" />
                        </a>&nbsp; */}
                        <a href="https://www.facebook.com/ConnectPromoCrew" target="_blank" rel="noreferrer" className="red btn-floating btn-small">
                            <Icon>facebook</Icon>
                        </a>&nbsp;
                        {/* <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="red btn-floating btn-small">
                            <i className="fab fa-twitter" />
                        </a>&nbsp; */}
                        {/* <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="red btn-floating btn-small">
                            <Icon>youtube</Icon>
                        </a>&nbsp; */}
                        <a href="https://wa.me/919074342615" target="_blank" rel="noreferrer" className="red btn-floating btn-small">
                            <Icon>whatsapp</Icon>
                        </a>&nbsp;
                        <a href="https://t.me/blockbuster1997" target="_blank" rel="noreferrer" className="red btn-floating btn-small">
                            <Icon>telegram</Icon>
                        </a>
                    </Col>
                </Row>
            </div>
            {/* copyright */}
            <div className="footer-copyright">
                <div className="container center-align">&copy; 2022 PromoCrew</div>
            </div>
        </footer>
    );
}

export default Footer;