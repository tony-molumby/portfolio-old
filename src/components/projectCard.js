import React, {Component} from 'react';

class ProjectCard extends Component {
    render(){
        let labelKey = "label" + this.props.number;
        let imageKey = "image" + this.props.number; 
        let display = [
            <div className="project-label" key={labelKey}>
                <div className="project-label-container">
                    <h3>{this.props.name}</h3>
                    <hr />
                </div>
                <p>{this.props.label}</p>
            </div>,
            <img className="project-image" src={this.props.img} key={imageKey} />
        ]

        if(this.props.position === "left"){
            display = [
                <img className="project-image" src={this.props.img} key={imageKey}/>,
                <div className="project-label" key={labelKey}>
                    <div className="project-label-container">
                        <h3>{this.props.name}</h3>
                        <hr />
                    </div>
                    <p>{this.props.label}</p>
                </div>
            ]
        }
        return (
            <div id={this.props.id} className={"project-card " + this.props.position} key={this.props.id}>
                {display}
            </div>
        )
       
    }
}

export default ProjectCard;