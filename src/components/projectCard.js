import React, {Component} from 'react';
import {Button, Dimmer, Image, Header, Popup} from 'semantic-ui-react';

class ProjectCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: false
        }
    }

    handleClick = (e, {name}) => {
        window.open(this.props[name], '_blank');
    }

    handleMouseEnter = (e) => {
        this.setState({
            active: true
        })
    }

    handleMouseLeave = (e) => {
        this.setState({
            active: false
        })
    }

    render(){
        let {active} = this.state;
        let githubBtn = (
            <Popup
            trigger={
                <Button 
                    name="github" 
                    onClick={this.handleClick} 
                    icon="github square"
                    size="big"
                />
            }
            content="View code on github"
        />
        );
        if(this.props.github === undefined){
            githubBtn = "";
        }

        const content = (
            <div className="card-content">
                <Header as="h2" color="grey">{this.props.name} </Header>
                {githubBtn}
                <Popup
                    trigger={
                        <Button 
                            name="url" 
                            icon="external" 
                            size="big"
                            onClick={this.handleClick}
                            className="button"
                        />
                    }
                    content="View on the web"
                />
            </div>
        )
        return (
                <Dimmer.Dimmable
                    as={Image}
                    dimmed={active}
                    dimmer={{active, content}} 
                    onMouseEnter={this.handleMouseEnter} 
                    onMouseLeave={this.handleMouseLeave}
                    size='medium'
                    src={this.props.img}
                    className="project-card"
                />
        )
    }
}

export default ProjectCard