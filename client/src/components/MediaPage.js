import { Row, Col } from 'react-materialize';
import dh from './images/deccanherald.png'


function MediaPage() {
    return(

        <div id="mediaPageBg" className="mediaPage">
            <div className="box-shadow">
                <div id="main-content" className="container">
                    <h1 className="center">Media and Press</h1>
                    <Row>
                        <Col>
                            <div>
                                <img src={dh} alt="logo" width="50%"/>
                                <h3>Deccan Herald</h3>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>

        // <div>
        //     <div className='media-bg'>
        //         <h2>Media</h2>

        //         <div className="container">

        //             <div className='articles'>
        //                 <Row>
        //                     <Col>
        //                         <div><img src={dh}/> <h3>Deccan Herald</h3></div>
        //                     </Col>
        //                 </Row>

        //             </div>


        //         </div>
        //     </div>

        // </div>
    );


}

export default MediaPage;