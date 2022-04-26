import emailjs from '@emailjs/browser';
import { useState } from "react";


const Result = ()=>{
    return(
        <p>Your message has been successfully sent</p>
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
                <div className="from-section" onSubmit={sendEmail}>
                    <form>
                        <label>Name</label> 
                        <input type="text" name="name" required/>

                        <label>Email</label> 
                        <input type="email" name="email" required/> 

                        <label>Phone</label> 
                        <input type="tel" name="phone" required/>

                        <label>Message </label> 
                        <textarea name="message" rows="4" required/>
                        <input type="submit" value="send"/>
                        <div className="row">{result ? <Result/> : null}</div>

                    </form>
                </div>
            </div>
        </div>

    );
}

export default ContactUs;