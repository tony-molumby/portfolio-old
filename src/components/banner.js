import React, {Component} from 'react';
import Diamond from './diamond';

class Banner extends Component {

    createRow = (x, y, dWidth, dHeight, fill) => {
        let {windowWidth} = this.props;
        let numDiamonds = Math.ceil((windowWidth - x) / dWidth);
        let display = [];
        let zeroStart = false;
        if(x === 0) zeroStart = true;

        for (let i = 0; i < numDiamonds; i++){
            let center = [];
            if(i === 0){
                center = [x, y];
            } else if (zeroStart && i === 1) {
                x = dWidth;
                center = [x, y];
            } else if (zeroStart && i > 1){
                center = [dWidth * i, y];
            } else {
                center = [x + dWidth * i, y];
            }
            display.push(
                <Diamond center={center} width={dWidth} height={dHeight} fill={fill} key={"diamond " + i}/> 
            )
        }
        return display;
    }



    render(){
        let width = 81;
        let height = 120;
        let lightGray = '#D7D7D7';
        let darkGray = '#AEAEAE';
        let row1 = this.createRow(0, height/2, width, height, lightGray);
        let row2 = this.createRow((width/2), height + 1, width, height, darkGray);

        return(
            <div id={this.props.id}>
                <svg height={height * 1.5} width="100%" >
                    {row1}
                    {row2}
                </svg>
            </div>
        )
    }
}

export default Banner;