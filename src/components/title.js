import React, {Component} from 'react';

class Title extends Component {
    render(){
        return(
            <div className={this.props.className}>
                <h1 className="title">HI, I'M TONY</h1>
                <div className="hr"></div>
            </div>
        )
    }
}

export default Title;