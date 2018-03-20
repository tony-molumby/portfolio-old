import React, {Component} from 'react';

class Contact extends Component {
    render(){
        
        return(
            <div id={this.props.id} className={"orange contain " + this.props.className}>
                <div id="bio-title">
                    <h2>CONTACT ME</h2>
                    <div className="hr-inverted"></div>
                </div>
                <p>FORM DATA HERE</p>
                
            </div>
        )
    }
}

export default Contact;