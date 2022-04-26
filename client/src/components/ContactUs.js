import emailjs from '@emailjs/browser';
import { useState } from "react";
import { Button, Card, Icon, Textarea, TextInput } from 'react-materialize';


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
                <Card id="contactUsForm" className="from-section">
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
                        <Button id="submitButton" node="button" type="submit" waves="light" value="send" >
                                    Submit<Icon right>send</Icon>
                        </Button>
                        <div className="row">{result ? <Result/> : null}</div>
                    </form>
                </Card>
                <br />
                <div>
                    <p className="align-left">
                        {/* heading for contact us section */}
                            {/* links to various contacting options */}
                            <div>
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
                            </div>
                    </p>
                </div>
            </div>
        </div>

    );
}

export default ContactUs;