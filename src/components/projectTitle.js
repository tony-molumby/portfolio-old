import React, {Component} from 'react';

class ProjectTitle extends Component {
    render(){
        return(
            <div className={this.props.className}>
                <h2>PROJECTS</h2>
                <div className="hr"></div>
            </div>
        )
    }
}

export default ProjectTitle;