import React, {Component} from 'react';
import {Button, Dimmer, Image, Header, Popup} from 'semantic-ui-react';

class ProjectCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: false
        }
    }

    handleClick = (e) => {
        window.open(this.props.url, '_blank');
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
                <Button name="github" 
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
            <div>
                <Header as="h2" inverted>{this.props.name} </Header>
                {githubBtn}
                <Popup
                    trigger={<Button name="url" icon="external" size="big"/>}
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
                />
        )
    }
}

export default ProjectCard