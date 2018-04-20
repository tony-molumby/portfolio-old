import React, {Component} from 'react';
import {Icon, Popup, Button} from 'semantic-ui-react';

class ProjectCard extends Component {

    handleClick = (url, e) => {
        window.open(url, '_blank');
    }

    createButtons = () => {
        let buttons = [];
        if(this.props.github){
            let githubBtn = (
                <Popup
                    trigger={
                        <Icon 
                            name="github" 
                            onClick={(e) => this.handleClick(this.props.github, e)} 
                            size="big"
                            className="project-icon"
                        />
                    }
                content="View code on github"
            />
            )
            buttons.push(githubBtn);
        }
        if(this.props.url){
            let urlBtn = (
                <Popup
                    trigger={
                        <Icon 
                            name="external" 
                            onClick={(e) => this.handleClick(this.props.url, e)} 
                            size="big"
                            className="project-icon"
                        />
                    }
                content="View on the web"
            />
            )
            buttons.push(urlBtn);
        }
        return buttons;
    }


    render(){
        let labelKey = "label" + this.props.number;
        let imageKey = "image" + this.props.number; 
        let aos = "zoom-in-left";
        let buttonDisplay = this.createButtons();
        let display = [
            <div 
                    id={this.props.id}
                    className={"project-card "}
                    key={this.props.id}
                    data-aos={aos}
                    data-aos-duration={this.props.duration}
                >
                <div className="project-label" key={labelKey}>
                    <div className="project-label-container">
                        <h3>{this.props.name}</h3>
                        <hr />
                        <p>{this.props.label}</p>
                    </div>
                </div>
                <div className="project-buttons">
                    {buttonDisplay}
                </div>
                <img className="project-image" src={this.props.img} key={imageKey} alt={this.props.name} />
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
                    data-aos-duration={this.props.duration}
                >
                    <img className="project-image" src={this.props.img} key={imageKey} alt={this.props.name}/>
                    <div className="project-label" key={labelKey}>
                        <div className="project-label-container">
                            <h3>{this.props.name}</h3>
                            <hr />
                            <p>{this.props.label}</p>
                        </div>
                    </div>
                    <div className="project-buttons">
                        {buttonDisplay}
                    </div>
                </div>
            ]
        }
        return (
            <div className={this.props.position}>
                {display}
            </div>
        )
       
    }
}

export default ProjectCard;