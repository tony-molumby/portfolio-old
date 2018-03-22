import React, {Component} from 'react';
import {Icon, Popup} from 'semantic-ui-react';

class Social extends Component {
    handleClick = (e, data) => {
        let classes = e.target.className;
        let url = "";
        //this is a hack, need to refactor
        if(classes.indexOf("linkedin") > -1){
            url = "https://www.linkedin.com/in/tony-molumby/";
        } else if(classes.indexOf("github") > -1){
            url = "https://github.com/tony-molumby"
        } else {
            url = "https://drive.google.com/file/d/11NqUUacmprwmMjpyymOBWDXePqdihiyB/view?usp=sharing";
        }
        window.open(url, '_blank');
    }

    render(){
        return(
            <div id={this.props.id} className={this.props.className}>
                <Popup
                    trigger={
                        <Icon
                            link 
                            name="linkedin square" 
                            size="huge" 
                            className="social"
                            onClick={this.handleClick} 
                        />
                    }
                    content='Linkedin'
                    
                    
                />
                <Popup
                    trigger={
                        <Icon
                            link 
                            name="github square" 
                            size="huge" 
                            className="social"
                            onClick={this.handleClick} 
                        />
                    }
                    content='Github'
                    
                />
                 <Popup
                    trigger={
                        <Icon
                            link 
                            name="file text" 
                            size="huge" 
                            className="social"
                            onClick={this.handleClick} 
                        />
                    }
                    content='CV'
                    
                />
            </div>
        )
    }
}

export default Social;