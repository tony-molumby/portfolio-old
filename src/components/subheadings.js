import React, {Component} from 'react';

class Subheadings extends Component {
    
    render() {
        return (
            <div 
                id={this.props.id} 
                className="container"
                data-aos="fade-up" 
                data-aos-duration={this.props.duration}
            >
                <h2 id="subheading-1">
                    Product Leader / JS Developer / Technical Designer
                </h2>
                <h3 id="subheading-2">
                    I'm a Innovator who builds digital products.  
                    I enjoy working with organizations which 
                    thrive on innovation, and value positive 
                    company culture.
                </h3>
            </div>
        )
    }
} 

export default Subheadings;