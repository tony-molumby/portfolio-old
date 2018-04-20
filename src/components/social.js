import React, {Component} from 'react';
import {Icon, Popup} from 'semantic-ui-react';

class Social extends Component {

    constructor(props) {
        super(props) 
        this.state = {
                linkedin: "https://www.linkedin.com/in/tony-molumby/",
                github: "https://github.com/tony-molumby",
                resume: "https://drive.google.com/file/d/11NqUUacmprwmMjpyymOBWDXePqdihiyB/view?usp=sharing"
        }
    }

    handleClick = (url, e) => {
        window.open(url, '_blank');
    }


    render(){
        return(
            <div 
                id={this.props.id}
                className="container" 
                data-aos="fade-up"
                data-aos-duration={this.props.duration}
            >
             <Popup
                    trigger={
                        <Icon
                            link 
                            name="file pdf outline" 
                            size="huge" 
                            className="social"
                            onClick={(e) => this.handleClick(this.state.resume, e)} 
                        />
                    }
                    content='Resume'
                    
                />
                <Popup
                    trigger={
                        <Icon
                            link 
                            name="linkedin" 
                            size="huge" 
                            className="social"
                            onClick={(e) => this.handleClick(this.state.linkedin, e)} 
                        />
                    }
                    content='Linkedin'
                    
                    
                />
                <Popup
                    trigger={
                        <Icon
                            link 
                            name="github" 
                            size="huge" 
                            className="social"
                            onClick={(e) => this.handleClick(this.state.github, e)} 
                        />
                    }
                    content='Github'
                    
                />
                
            </div>
        )
    }
}

export default Social;