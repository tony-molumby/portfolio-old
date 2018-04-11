import React, {Component} from 'react';
import {Image} from 'semantic-ui-react';

class Bio extends Component {
    render(){
        let {windowWidth, projectsLeft} = this.props;
        let bioWidth = windowWidth - projectsLeft;
        let styles = {}
          
        if(windowWidth > 767 && windowWidth < 1320){
            styles = {
                width: bioWidth - 18
            }
        }
        return(
            
            <div id={this.props.id} className={"orange contain "} style={styles}>
                <div id="bio-title">
                    <h2>THIS IS ME!</h2>
                    <div className="hr-inverted"></div>
                </div>
                <h3 id="bio-text">
                    I am passionate about creating applications which help others.  
                    I have been working in health care and tech for the last 10 years, 
                    but I am also interested in consumer applications.  I have expertise in
                    product management / strategy, project management, UX design, prototyping, JS front-end / back-end development,
                    and patient care.  Check out the links to my CV, github, and linkedin below.
                </h3>
                
            </div>
        )
    }
}

export default Bio;