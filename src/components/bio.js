import React, {Component} from 'react';
import {Image} from 'semantic-ui-react';
import headshot from '../pictures/headshot.jpg'

class Bio extends Component {
    render(){
        
        return(
            <div id={this.props.id} className={"orange contain " + this.props.className}>
                <Image src={headshot} size='small' circular bordered centered id="bio-pic"/>
                <div id="bio-title">
                    <h2>THIS IS ME!</h2>
                    <div className="hr-inverted"></div>
                </div>
                <h3 id="bio-text">
                    I am passionate about creating applications which help others.  
                    I have been working in health care and tech for the last 10 years, 
                    but I am also interested in consumer applications.  I have expertise in
                    product management / strategy, project management, web development, and patient care.  Check out
                    the links to my CV, github, and linkedin below.
                </h3>
                
            </div>
        )
    }
}

export default Bio;