import tea from './images/tea.jpg';
import tractor from './images/tractor.jpg';
import { CardPanel, Carousel, Col, Parallax, Row } from 'react-materialize';

function MainPage() {
    return(
        <div id="main-content">
            <div className="carousel-holder black" id="image-carousel">
                {/* Photo Carousel */}
                <Carousel carouselId="Carousel-1" options={{ fullWidth: true, indicators: true }}>
                    {/* carousel div where the links and images */}
                    <div className="black carousel-image-1">
                        <a href="/branding" className="carousel-link" alt="go to branding">.</a>
                    </div>
                </Carousel>
            </div>
            
            {/* Parallax */}'
            <Parallax image={<img src={tractor} alt="tractor" className="responsive-img" />} options={{responsiveThreshold: 0}} />
            {/* Feedback */}
            <section className="container section" id="feedback">
                {/* new row inside the section for feedback title */}
                <div className="row center-align">
                    {/* first column full size */}
                    <div className="col s12">
                        <h2>Testimonials</h2>
                    </div>
                </div>
                {/* new row for feedbacks */}
                <Row className="center-align">
                    {/* first column */}
                    <Col s={12} l={6}>
                        {/* card div to give it card like styling */}
                        <CardPanel className="card-panel red center-align">
                            {/* content of the card */}
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempore reprehenderit aut esse iure laborum fugit quisquam sequi cumque aliquid. Provident unde explicabo eaque nihil atque earum id, minima quibusdam.
                            </p>
                        </CardPanel>
                    </Col>
                    {/* second column */}
                    <Col s={12} l={6}>
                        <CardPanel className="card-panel red center-align">
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deserunt dignissimos dolores fuga. Quidem, id, temporibus esse quos officiis ipsam explicabo sit tempora labore sapiente provident sint quis iste est.
                            </p>
                        </CardPanel>
                    </Col>
                </Row>
            </section>
            {/* Parallax */}
            <Parallax image={<img src={tea} alt="tractor" className="responsive-img" />} options={{responsiveThreshold: 0}} />
        </div>
    );
}

export default MainPage;