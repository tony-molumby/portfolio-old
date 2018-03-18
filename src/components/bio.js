import React, {Component} from 'react';
import {Image, Header} from 'semantic-ui-react';
import headshot from '../pictures/headshot.jpg'

class Bio extends Component {
    render(){
        
        return(
            <div id={this.props.id} className={"orange " + this.props.className}>
                <Image src={headshot} size='small' circular bordered centered id="bio-pic"/>
                <div id="bio-title">
                    <Header as="h2">THIS IS ME!</Header>
                    <div className="hr-inverted"></div>
                </div>
                <Header as='h3' id="bio-text" >
                    I am passionate about creating applications which help others.  
                    I have been working in healthcare and tech for the last 10 years, 
                    but I am also interested in consumer applications.  I have expertise in
                    product / project management, web development and patient care.  Check out
                    the links to my CV, github, and linkedin below.
                </Header>
                
            </div>
        )
    }
}

export default Bio;