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
                        <a href="/packages" className="carousel-link" alt="go to packages">.</a>
                    </div>
                    <div className="black carousel-image-2">
                        <a href="/guides" className="carousel-link" alt="go to guides">.</a>
                    </div>
                </Carousel>
            </div>
            {/* Serivces (section to hold all services (divs) for styling and targeting together and also for centering) */}
            <section className="container section" id="services">
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <Row id="packages">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <a href="/packages">
                        {/* First column */}
                        <Col s={12} l={4}>
                            <h2>Packages</h2>
                        </Col>
                        {/* Second column */}
                        <Col s={12} l={6} offset="l2">
                            <p>
                                God’s own Tourism’s packages are very vast and varied. We ensure that all customer’s needs and desires are met. Our packages can be further broken down into specific tour types. Tours available range from Special-interest tours, Adventure tours, City or Regional tours, Group tours and Fully Escorted tours.
                            </p>
                        </Col>
                    </a>
                </Row>
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <Row id="tickets">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <a href="/tickets">
                        {/* First column */}
                        <Col s={12} l={4} push="l6">
                            <h2>Tickets</h2>
                        </Col>
                        {/* Second column */}
                        <Col s={12} l={4} className="right-align" pull="l5" offset="l2">
                            <p>
                                Ticketing system is responsible for providing the details of ticket availability and the rates associated with the tickets. The ticketing system in God’s own tourism, while issuing any ticket connects to primary conveyance / hotels / cars data to find real time availability and pricing. Once the availability is confirmed, users can proceed to make payment to confirm the booking.
                            </p>
                        </Col>
                    </a>
                </Row>
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <Row id="hotels">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <a href="/hotels">
                        {/* First column */}
                        <Col s={12} l={4}>
                            <h2>Hotels</h2>
                        </Col>
                        {/* Second column */}
                        <Col s={12} l={6} offset="l2">
                            <p>
                                Hotels are the most obvious and popular form of accommodation for tourists and the hotel industry is inextricably linked to the tourism industry. Put simply, hotels provide paid lodgings for guests. With that being said, aside from beds and other essential facilities, the services they provide can vary quite drastically. <br />Tourism industry closely connected to the hotel industry, the hospitality industry and the transport industry, and much of it is based around keeping tourists happy, occupied and equipped with the things they need during their time away from home.
                            </p>
                        </Col>
                    </a>
                </Row>
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <Row id="cabs">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <a href="/cabs">
                        {/* First column */}
                        <Col s={12} l={4} push="l6">
                            <h2>Cabs</h2>
                        </Col>
                        {/* Second column */}
                        <Col s={12} l={4} className="right-align" pull="l5" offset="l2">
                            <p>
                                You can book car rental service in God’s own tourism whenever you want with us without any problem. Our drivers make the full support with good knowledge of the local & outer spots and are very professional with communication in English, Malayalam, Hindi. Going for a tour should be a memorable experience for everyone and we take care of it at our best. Our taxis in India are really comfortable and are in best. Cab and driver are from the local area so that the driver is well known of the local route and can act as the guide if needed.
                            </p>
                        </Col>
                    </a>
                </Row>
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <Row id="guides">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <a href="/guides">
                        {/* First column */}
                        <Col s={12} l={4}>
                            <h2>Guides</h2>
                        </Col>
                        {/* Second column */}
                        <Col s={12} l={6} offset="l2">
                            <p>
                                Our tourist guide who provides assistance, information on cultural, historical and contemporary heritage to people on organized sightseeing and individual clients at educational establishments, religious and historical sites such as; museums, and at various venues of tourist attraction resorts
                            </p>
                        </Col>
                    </a>
                </Row>
                {/* New Row for splitting to 2 columns for side by side layout of service name and description */}
                <Row id="about">
                    {/* link to enclose the name and description so that when it is clicked it take user to the respective page */}
                    <a href="/AboutUs">
                        {/* First column */}
                        <Col s={12} l={4} push="l6">
                            <h2>About Us</h2>
                        </Col>
                        {/* Second column */}
                        <Col s={12} l={4} className="right-align" pull="l5" offset="l2">
                            <p>
                                We are a full service travel management company. It is ranked among the top corporate travel provides, serving all the leading companies. Quality services are delivered with the financial strength, experienced teammates, advanced systems and innovations would expect from a leader.<br />God’s own tourism focuses on your requirements and co-ordinates with you to provide you total satisfaction. We offer you every service from consolidated travel purchases to regional support. We understand the business from the ground up and that enable us to service you better.
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
                        <h2>Feedback</h2>
                    </div>
                </div>
                {/* new row for feedbacks */}
                <Row className="center-align">
                    {/* first column */}
                    <Col s={12} l={6}>
                        {/* card div to give it card like styling */}
                        <CardPanel className="card-panel teal center-align">
                            {/* content of the card */}
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempore reprehenderit aut esse iure laborum fugit quisquam sequi cumque aliquid. Provident unde explicabo eaque nihil atque earum id, minima quibusdam.
                            </p>
                        </CardPanel>
                    </Col>
                    {/* second column */}
                    <Col s={12} l={6}>
                        <CardPanel className="card-panel teal center-align">
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