import React, {Component} from 'react';

class Title extends Component {
    
    render() {
        return (
            <div 
                id={this.props.id} 
                className="container" 
                data-aos="fade-up" 
                data-aos-duration="1500"
            >
                <h1 id="heading">Tony Molumby</h1>
                <div id="subheadings">
                    <h2 id="subheading-1" >Product Leader / JS Developer / Technical Designer</h2>
                    <h3 id="subheading-2">
                        I'm a Innovator who builds digital products.  
                        I enjoy working with organizations which 
                        thrive on innovation, and value positive 
                        company culture.
                    </h3>
                </div>
            </div>
        )
    }
} 

export default Title;