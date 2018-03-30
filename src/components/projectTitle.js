import React, {Component} from 'react';

class ProjectTitle extends Component {
    render(){
        return(
            <div className={this.props.className} id={this.props.id}>
                <h2>PROJECTS</h2>
                <div className="hr"></div>
            </div>
        )
    }
}

export default ProjectTitle;