import React, {Component} from 'react';
import Diamond from './diamond';

class Banner extends Component {

    render(){
        let width = 384;
        let height = 480;
        let lightGray = '#D7D7D7';
        let darkGray = '#AEAEAE';
        return(
            <div id={this.props.id}>
                <svg viewBox="0 0 768 721">
                    {/* first row */}
                    <Diamond center={[0, (height / 2)]} width={width} height={height} fill={lightGray} />
                    <Diamond center={[(width + 1), (height / 2)]} width={width} height={height} fill={lightGray} />
                    <Diamond center={[((width + 1) * 2), (height / 2)]} width={width} height={height} fill={lightGray} />

                    {/* second row */}
                    <Diamond center={[(width / 2) + 1, (height + 2)]} width={width} height={height} fill={darkGray} />
                    <Diamond center={[(width + 1 + (width / 2)), (height + 2)]} width={width} height={height} fill={darkGray} />
                </svg>
            </div>
        )
    }
}

export default Banner;