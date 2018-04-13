import React, {Component} from 'react';

class ProjectCard extends Component {
    render(){
        let display = [
            <div className="project-label">
                <div className="project-label-container">
                    <h3>{this.props.name}</h3>
                    <hr />
                </div>
                <p>{this.props.label}</p>
            </div>,
            <img className="project-image" src={this.props.img} />
        ]

        if(this.props.position === "left"){
            display = [
                <img className="project-image" src={this.props.img} />,
                <div className="project-label">
                    <div className="project-label-container">
                        <h3>{this.props.name}</h3>
                        <hr />
                    </div>
                    <p>{this.props.label}</p>
                </div>
            ]
        }
        return (
            <div id={this.props.id} className={"project-card " + this.props.position}>
                {display}
            </div>
        )
       
    }
}

export default ProjectCard;