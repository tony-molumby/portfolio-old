import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';

class SkillsGraph extends Component {

    displayLines = () => {
        let x1 = 10;
        let y1 = 10;
        let x2 = 290;
        let y2 = 10;
        let lines = []
        for(let i = 0; i < 6; i++){
            lines.push(
                <line x1={x1} y1={y1} x2={x2} y2={y2} className="line" />
            )
            y1 += 35;
            y2 += 35;
        }
        return lines;
    }

    displayRects = (width, height) => {
        let fromTop = [ 35, 70, 35, 35, 50, 70];
        let rects = [];
        let x = 10;
        fromTop.forEach((item, i) => {
            
            rects.push(
                <rect 
                    x={x} 
                    y={item} 
                    width={width}
                    height={height - item - 17} 
                    className="rect"
                />
            )
            x += (26 + width);
        })
        return rects;
    }

    render(){
        let lightGray = "#D7D7D7";
        let darkGray = "#AEAEAE";
        let orange = "#F6A829";
        let veryDarkGray = "#5E5E5E"
        let lines = this.displayLines();
        let rects = this.displayRects(25, 200);
        return(
            <Container>
                <svg viewBox="0 0 300 200">
                    <rect width="300" height="200" fill={darkGray}/>
                    {lines}
                    {rects}
                </svg>
            </Container>
        )
    }
}

export default SkillsGraph;