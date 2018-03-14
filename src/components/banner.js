import React, {Component} from 'react';
import Diamond from './diamond';

class Banner extends Component {

    constructor(props) {
        super(props);

        this.state = {
            windowWidth: window.innerWidth
        };
    }

    handleResize = (e) => {
        this.setState({
            windowWidth: window.innerWidth
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    createRow = (x, y, dWidth, dHeight, fill) => {
        let {windowWidth} = this.state;
        let numDiamonds = Math.ceil((windowWidth - x) / dWidth);
        let display = [];
        
        for (let i = 0; i < numDiamonds; i++){
            let center = [];
            if(i === 0){
                center = [x, y];
            } else if(x === 0 && i === 1) {
                x = dWidth;
                center = [x, y];
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