import React, {Component} from 'react';
import ContactForm from './contactForm';

class Contact extends Component {
    render(){
        
        return(
            <div id={this.props.id} className={"orange contain " + this.props.className}>
                <div id="contact-title">
                    <h2>CONTACT ME</h2>
                    <div className="hr-inverted"></div>
                </div>
                <ContactForm id="contact-form" />
            </div>
        )
    }
}

export default Contact;