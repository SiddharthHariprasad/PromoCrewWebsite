import { Button, Icon, Textarea, TextInput } from 'react-materialize';


function SurveyLandingPage() {

    return(
        
        <div id="main-content" className="contactPage">
            <div className="container contactUsPage">
                <h1>Survey</h1>
                <div id="contactUsForm" className="from-section">
                    <h4>A few words about this survey</h4>
                    <p>
                        We are conducting this survey to collect information on your shopping pattern to help us build our new fashion ecommerce platform.
                        We believe in protecting the privacy of the people and thus, we are giving you a chance to win the Amazon Gift Card when you fill the survey.
                    </p>
                    <p>
                        You will be taken to the survey page when you click the link below. Please do complete the survey with honest answers and provide an email ID that we can contact you in if you win the Gift Card
                    </p>
                    <Button
                        href="/Survey"
                        node="a"
                        waves="light"
                        className="red accent-4 white-text">
                            <Icon left>redeem</Icon>
                            <span className="button-text">Click Here to complete the Survey</span>
                    </Button>
                </div>
            </div>
        </div>

    );
}

export default SurveyLandingPage;