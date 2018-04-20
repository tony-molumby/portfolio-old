import React, {Component} from 'react';
import Button from './button';

//svgs


class Social extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    name: "Resume",
                    url: "https://drive.google.com/file/d/11NqUUacmprwmMjpyymOBWDXePqdihiyB/view?usp=sharing",
                    icon: "far fa-file-pdf "
                },
                {
                    name: "Github",
                    url: "https://github.com/tony-molumby",
                    icon: "fab fa-github-square "
                },
                {
                    name: "Linkedin" ,
                    url: "https://www.linkedin.com/in/tony-molumby/",
                    icon: "fab fa-linkedin "
                }
            ]
        }
    }

    createDisplay = ({name, url, icon}, i) => {
        return (
            <Button name={name} url={url} icon={icon} className="button" number={i}/>
        )
    }

    render(){
        let {data} = this.state;
        let buttonDisplay = data.map(this.createDisplay);
        return(
            <div 
                id={this.props.id}
                data-aos="fade-up"
                data-aos-duration={this.props.duration}
            >
                {buttonDisplay}    
            </div>
        )
    }
}

export default Social;