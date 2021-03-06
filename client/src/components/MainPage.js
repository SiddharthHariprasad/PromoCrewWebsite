import { CardPanel, Carousel, Col, Row } from 'react-materialize';

function MainPage() {
    return(
        <div id="main-content">
            <div className="carousel-holder red" id="image-carousel">
                {/* Photo Carousel */}
                <Carousel carouselId="Carousel-1" options={{ fullWidth: true}}>
                    {/* carousel div where the links and images */}
                    <div className="black carousel-image-1">
                        <a href="/Services" className="carousel-link" alt="go to branding">.</a>
                    </div>
                </Carousel>
            </div>

            <div className="carousel-holder red" id="image-carousel">
                <Carousel carouselId="Carousel-1" options={{ fullWidth: true}}>
                    <div className="black carousel-image-2">
                        <a href="https://yesthra.com/" className="carousel-link" alt="go to branding">.</a>
                    </div>
                </Carousel>
            </div>

            {/* Feedback */}
            {/* <section className="container section mainPage" id="feedback"> */}
                {/* new row inside the section for feedback title */}
                {/* <Row className="center-align"> */}
                    {/* first column full size */}
                    {/* <Col s={12}> */}
                        {/* <h2>Testimonials</h2> */}
                    {/* </Col> */}
                {/* </Row> */}
                {/* new row for feedbacks */}
                {/* <Row className="center-align"> */}
                    {/* first column */}
                    {/* <Col s={12} l={6}> */}
                        {/* card div to give it card like styling */}
                        {/* <CardPanel className="card-panel center-align"> */}
                            {/* content of the card */}
                            {/* <h3>Lorem Ipsum</h3> */}
                            {/* <p> */}
                                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempore reprehenderit aut esse iure laborum fugit quisquam sequi cumque aliquid. Provident unde explicabo eaque nihil atque earum id, minima quibusdam. */}
                            {/* </p> */}
                        {/* </CardPanel> */}
                    {/* </Col> */}
                    {/* second column */}
                    {/* <Col s={12} l={6}> */}
                        {/* <CardPanel className="card-panel center-align"> */}
                            {/* <h3>Lorem Ipsum</h3> */}
                            {/* <p> */}
                                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deserunt dignissimos dolores fuga. Quidem, id, temporibus esse quos officiis ipsam explicabo sit tempora labore sapiente provident sint quis iste est. */}
                            {/* </p> */}
                        {/* </CardPanel> */}
                    {/* </Col> */}
                {/* </Row> */}
            {/* </section> */}

        </div>
    );
}

export default MainPage;