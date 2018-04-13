import React, {Component} from 'react';
import picture from '../pictures/headshot_midres.jpg';

class Headshot extends Component {
    
    render() {
        return (
            <img id={this.props.id} src={picture} />
        )
    }
} 

export default Headshot;