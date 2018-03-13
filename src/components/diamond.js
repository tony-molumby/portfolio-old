import React, {Component} from 'react';

class Diamond extends Component {

    shouldComponentUpdate(nextProps){
        return this.props !== nextProps;
    }

    createPath(){
        let {width, height, center} = this.props;
        let hw = width/2;
        let hh = height/2;
        let coords = [];
        coords.push("M", center[0] , (center[1] - hh), 'l', -hw, hh, 'l', hw, hh, 'l', hw, -hh, "Z");
        return coords.join(" ");
    }

    render () {
        let {fill} = this.props;
        let p = this.createPath();
        return (
                 <path 
                    d={p}
                    fill={fill}
                   />
        )
    }
}

export default Diamond;