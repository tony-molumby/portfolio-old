import React, {Component} from 'react';
import ContactForm from './contactForm';

class Contact extends Component {
    render(){
        
        return(
            <div 
                id={this.props.id}
                >
                <div 
                    id="contact-title" 
                    data-aos="fade-up"
                    data-aos-duration={this.props.duration}
                    
                >
                    <h3>
                        I am currently looking for a position with strong mentorship to continue to improve my skills.
                        <br />
                        <br />
                        If this sounds like your organization, contact me and let's see if it's a good fit.
                    </h3>
                </div>
                <ContactForm id="contact-form" duration={this.props.duration} />
            </div>
        )
    }
}

export default Contact;