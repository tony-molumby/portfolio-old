import React, {Component} from 'react';

class NameHeading extends Component {
    
    render() {
        return (
            <div 
                id={this.props.id} 
                className="container" 
                data-aos="fade-up" 
                data-aos-duration={this.props.duration}
            >
                <h1>Tony Molumby</h1>
            </div>
        )
    }
} 

export default NameHeading;