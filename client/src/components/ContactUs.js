import emailjs from '@emailjs/browser';
import { useState } from "react";
import { Button, Icon, Textarea, TextInput } from 'react-materialize';


const Result = ()=>{
    return(
        <p className="">Your message has been successfully sent</p>
    )
}


function ContactUs() {

    const [result, showResult] = useState(false);

    const sendEmail = (e) => {


        e.preventDefault();
    
        emailjs.sendForm('service_9hu6ylh', 'template_0bgribe', e.target, '22bwCC-s2W01YpJuy')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };



    return(
        <div id="main-content">
            <div className="container contactUsPage">
                <h1>Contact Us</h1>
                <div id="contactUsForm" className="from-section">
                    <form onSubmit={sendEmail}>
                        {/* <label>Name</label> 
                        <input type="text" name="name" required/> */}
                        <TextInput id="name" name="name" label="Name" placeholder="Enter Name" validate required/>
                        <br />
                        {/* <label>Email</label> 
                        <input type="email" name="email" required/>  */}
                        <TextInput id="email" name="email" label="Email" placeholder="Enter Email" validate required/>
                        <br />
                        {/* <label>Phone</label> 
                        <input type="tel" name="phone" required/> */}
                        <TextInput id="phone" name="phone" label="Phone" placeholder="Enter Phone Number" validate required type='tel'/>
                        <br />
                        {/* <label>Message </label> 
                        <textarea name="message" rows="4" required/> */}
                        <Textarea id="message" name="message" label="Message" placeholder="Enter Message" validate required/>
                        {/* <input type="submit" value="send"/> */}
                        <Button id="submitButton" node="button" type="submit" waves="light" value="send" className="red lighten-1">
                                    Submit<Icon right>send</Icon>
                        </Button>
                        <div className="row">{result ? <Result/> : null}</div>
                    </form>
                </div>
                <br />
                <div>
                    <p className="align-left">
                        {/* heading for contact us section */}
                            {/* links to various contacting options */}
                            <Button
                                href="tel:+919074342615"
                                node="a"
                                waves="light"
                                className="red lighten-1 white-text">
                                    <Icon left>phone</Icon>
                                    <span className="button-text">+919074342615</span>
                            </Button>
                            <br /><br />
                            <Button
                                href="mailto:connect@promocrew.in"
                                node="a"
                                waves="light"
                                className="red lighten-1 white-text">
                                    <Icon left>mail</Icon>
                                    <span className="button-text">connect@promocrew.in</span>
                            </Button>
                            {/* <div>
                                <a href="tel:+919074342615" className="btn-floating btn-small red darken-3">
                                    <i className="material-icons">phone</i>
                                </a>&nbsp;
                                <a href="tel:+919074342615"><b>Phone :</b> +919074342615</a>
                            </div>
                            <div>
                                <a href="mailto:connect@promocrew.in" className="btn-floating btn-small red darken-3">
                                    <i className="material-icons">mail</i>
                                </a>&nbsp;
                                <a href="mailto:connect@promocrew.in"><b>Mail :</b> connect@promocrew.in</a>
                            </div> */}
                    </p>
                </div>

                <div>
                <h2>Location</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.4280113567243!2d77.62974956015064!3d12.929839965117164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1460d1af3721%3A0x7547770171fb3d5!2sWeWork!5e0!3m2!1sen!2sin!4v1651050303718!5m2!1sen!2sin" width="450" height="300" className="map"></iframe>
                </div>
                <br/>
            </div>
        </div>

    );
}

export default ContactUs;