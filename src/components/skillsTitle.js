import React, {Component} from 'react';

class SkillsTitle extends Component {
    render(){
        return(
            <div id={this.props.id} className={this.props.className}>
                <h2>Skills</h2>
                <div className="hr"></div>
            </div>  
        )
    }
}

export default SkillsTitle;