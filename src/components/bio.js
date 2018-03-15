import React, {Component} from 'react';
import {Image} from 'semantic-ui-react';
import headshot from '../pictures/headshot.jpg'

class Bio extends Component {
    render(){
        
        return(
            <div id={this.props.id} className={"orange " + this.props.className}>
                <Image src={headshot} size='medium' circular bordered centered/>
            </div>
        )
    }
}

export default Bio;