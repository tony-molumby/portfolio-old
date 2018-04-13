import React, {Component} from 'react';
import ContactForm from './contactForm';

class Contact extends Component {
    render(){
        
        return(
            <div id={this.props.id} className={"orange contain " + this.props.className}>
                <div id="contact-title">
                    <h3>
                        I am currently looking for a position with strong mentorship to continue to improve my skills.
                        <br />
                        <br />
                        Contact me and let's see if its a good fit.
                    </h3>
                    <div className="hr-inverted"></div>
                </div>
                <ContactForm id="contact-form" />
            </div>
        )
    }
}

export default Contact;