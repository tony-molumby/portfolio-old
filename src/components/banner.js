import React, {Component} from 'react';

import ggBridge from '../pictures/gg_bridge_dusk.jpeg';

class Banner extends Component {
    render(){
        let content;

        if(this.props.windowWidth > 800){
            content = <img src={ggBridge} id="banner-img"/>
        }
        return (
            <div id={this.props.id}>
                {content}
            </div>
        )
    }
}

export default Banner;