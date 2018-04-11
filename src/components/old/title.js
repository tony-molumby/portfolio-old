import React, {Component} from 'react';

class Title extends Component {
    render(){
        return(
            <div id={this.props.id} className={this.props.className}>
                <div className="auto-width">
                    <h1>HI, I'M TONY</h1>
                    <div className="hr"></div>
                </div>
            </div>
        )
    }
}

export default Title;