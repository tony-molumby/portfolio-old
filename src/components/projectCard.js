import React, {Component} from 'react';

class ProjectCard extends Component {
    render(){
        let labelKey = "label" + this.props.number;
        let imageKey = "image" + this.props.number; 
        let aos = "zoom-in-left";
        let display = [
            <div 
                    id={this.props.id}
                    className={"project-card "}
                    key={this.props.id}
                    data-aos={aos}
                    data-aos-duration="1500"
                >
                <div className="project-label" key={labelKey}>
                    <div className="project-label-container">
                        <h3>{this.props.name}</h3>
                        <hr />
                    </div>
                    <p>{this.props.label}</p>
                </div>
                <img className="project-image" src={this.props.img} key={imageKey} />
            </div>
        ]

        if(this.props.position === "left"){
            aos = "zoom-in-right";
            display = [
                <div 
                    id={this.props.id}
                    className={"project-card "}
                    key={this.props.id}
                    data-aos={aos}
                    data-aos-duration="1500"
                >
                    <img className="project-image" src={this.props.img} key={imageKey}/>
                    <div className="project-label" key={labelKey}>
                        <div className="project-label-container">
                            <h3>{this.props.name}</h3>
                            <hr />
                        </div>
                        <p>{this.props.label}</p>
                    </div>
                </div>
            ]
        }
        return (
            <div 
                className={this.props.position}
                >
                {display}
            </div>
        )
       
    }
}

export default ProjectCard;