import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';

class SkillsGraph extends Component {
    render(){
        let lightGray = "#D7D7D7";
        let darkGray = "#AEAEAE";
        let orange = "#F6A829";
        return(
            <Container>
                <svg viewBox="0 0 300 200">
                    <rect width="300" height="200" fill={lightGray} />
                    <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
                </svg>
            </Container>
        )
    }
}

export default SkillsGraph;