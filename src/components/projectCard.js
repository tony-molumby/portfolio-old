import React, {Component} from 'react';

class ProjectCard extends Component {
    render(){
        return (
            <div className="project-card" >
                <a href={this.props.url}><img src={this.props.img} id={this.props.id}/></a>
            </div>
        )
        
    }
}

export default ProjectCard