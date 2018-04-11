import React, {Component} from 'react';
import picture from '../pictures/headshot_midres.jpg';

class Headshot extends component {
    
    render() {
        return (
            <img src={picture} />
        )
    }
} 

export default Headshot;