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
            {/* Serivces (section to hold all services (divs) for styling and targeting together and also for centering) */}
            <section className="container section" id="services">
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <Row id="services-heading">
                    {/* First column */}
                    <Col s={12} l={4} offset= "l5">
                        <h1>Services</h1>
                    </Col>
                </Row>
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <Row id="branding">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <a href="/branding">
                        {/* First column */}
                        <Col s={12} l={4}>
                            <h2>Branding</h2>
                        </Col>
                        {/* Second column */}
                        <Col s={12} l={6} offset="l2">
                            <p>
                                Cupidatat ex do est sunt. Minim in quis anim duis minim esse amet et enim laboris. Quis labore magna enim magna sit do ullamco. Commodo laborum pariatur nulla irure laboris sint do. Culpa sit amet exercitation est Lorem fugiat veniam laborum minim.
                            </p>
                        </Col>
                    </a>
                </Row>
                <hr />
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <Row id="contentdesign">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <a href="/contentdesign">
                        {/* First column */}
                        <Col s={12} l={4}>
                            <h2>Content Design</h2>
                        </Col>
                        {/* Second column */}
                        <Col s={12} l={4} offset="l2">
                            <p>
                                Qui sint nisi esse qui non id mollit nisi mollit adipisicing elit ullamco. Pariatur ad magna sint exercitation nostrud sunt do duis occaecat dolor. Exercitation ad labore excepteur ex commodo adipisicing elit ullamco. Minim magna irure nostrud culpa id irure. Sunt voluptate quis reprehenderit cupidatat mollit ad voluptate. Anim anim pariatur pariatur enim dolore sunt proident culpa reprehenderit est dolore.
                            </p>
                        </Col>
                    </a>
                </Row>
                <hr />
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <Row id="contentmarketing">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <a href="/contentmarketing">
                        {/* First column */}
                        <Col s={12} l={4}>
                            <h2>Content Marketing</h2>
                        </Col>
                        {/* Second column */}
                        <Col s={12} l={6} offset="l2">
                            <p>
                                Irure labore officia qui deserunt sint fugiat duis labore nostrud sit ut officia amet. Esse laborum elit sit exercitation magna id dolor. Sunt ut commodo enim irure nostrud cillum reprehenderit et commodo esse. Ullamco excepteur ipsum anim cupidatat nulla consequat enim deserunt nisi.
                            </p>
                        </Col>
                    </a>
                </Row>
                <hr />
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <Row id="digitalmarketing">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <a href="/digitalmarketing">
                        {/* First column */}
                        <Col s={12} l={4}>
                            <h2>Digital Marketing</h2>
                        </Col>
                        {/* Second column */}
                        <Col s={12} l={4} offset="l2">
                            <p>
                                Id minim aliqua culpa elit occaecat sit cillum in aute labore velit. Ex exercitation anim ipsum minim. Officia consectetur adipisicing culpa elit ut anim in aliqua aute non ad. Incididunt excepteur non nulla eiusmod exercitation dolor. Do excepteur dolor non minim excepteur duis enim exercitation minim elit do. Adipisicing sit non nisi do est. Lorem cupidatat consectetur exercitation incididunt reprehenderit irure nostrud do labore sit nostrud.
                            </p>
                        </Col>
                    </a>
                </Row>
                <hr />
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <Row id="prservices">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <a href="/prservices">
                        {/* First column */}
                        <Col s={12} l={4}>
                            <h2>PR Services</h2>
                        </Col>
                        {/* Second column */}
                        <Col s={12} l={6} offset="l2">
                            <p>
                                Nulla quis cillum est duis sint in esse ut dolor cillum et id elit. Lorem culpa proident eu excepteur elit dolore. Consequat duis enim dolor officia ut. Labore excepteur nulla id amet dolore in sunt fugiat excepteur est.
                            </p>
                        </Col>
                    </a>
                </Row>
                <hr />
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <Row id="about">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <a href="/AboutUs">
                        {/* First column */}
                        <Col s={12} l={4}>
                            <h2>About Us</h2>
                        </Col>
                        {/* Second column */}
                        <Col s={12} l={4} offset="l2">
                            <p>
                                PromoCrew Is an advertising company that offers you maximum boost for your product through both offline and online ads 
                            </p>
                        </Col>
                    </a>
                </Row>
            </section>
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