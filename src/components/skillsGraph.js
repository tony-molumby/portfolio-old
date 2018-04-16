import React, {Component} from 'react';
class SkillsGraph extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fromTop: [ 35, 70, 35, 35, 50, 70],
            labels: [
                "HTML", 
                "CSS", 
                "Javascript", 
                "ReactJS", 
                "NodeJS", 
                "MongoDB"
            ],
            letterNudge: [4, 6, 1, 3, 3, 1]
               
        }
    }

    displayLines = () => {
        let x1 = 10;
        let y1 = 10;
        let x2 = 290;
        let y2 = 10;
        let lines = []
        for(let i = 0; i < 6; i++){
            lines.push(
                <line x1={x1} y1={y1} x2={x2} y2={y2} key={"line-" + i} className="graph-line" />
            )
            y1 += 35;
            y2 += 35;
        }
        return lines;
    }

    displayRects = (width, height) => {
        let {fromTop} = this.state;
        let rects = [];
        let x = 10;
        fromTop.forEach((item, i) => {
            rects.push(
                <rect 
                    x={x} 
                    y={item} 
                    width={width}
                    height={height - item - 16}
                    key={"rect-" + i} 
                    className="graph-bar"
                    data-aos="fade-up" 
                    data-aos-duration="1500"
                />
            )
            x += 26 + width;
        })
        return rects;
    }

    displayLabels = (width) => {
        let {labels, letterNudge} = this.state;
        let jsxLabels = [];
        let x = 23;
                
        labels.forEach((item, i) => {
            let y = 270;
            y -= letterNudge[i] * 6;
            jsxLabels.push(
                <text
                    x={x}
                    y={y}
                    key={"label-" + i}
                    transform={"rotate(270," + x + "," + y + ")"}
                >
                {item}
                </text>
            )
            x += 27 + width;
        })
        return jsxLabels;
    }

    render(){
        let width = 25;
        let lines = this.displayLines();
        let rects = this.displayRects(width, 200);
        let labels = this.displayLabels(width);
        return(
            <div
                data-aos="fade-up" 
                data-aos-duration="1500">
                <svg 
                    viewBox="0 0 300 300" 
                    id={this.props.id}
                    >
                    <rect width="300" height="200" id="graph-background"/>
                    {lines}
                    {rects}
                    {labels}
                </svg> 
            </div>      
        )
    }
}

export default SkillsGraph;