import React, {Component} from 'react';


class Button extends Component{
    constructor(props){
        super(props);
        this.state = {
            mouseOver: false
        }
    }

    handleMouseOver = () => {
        this.setState({
            mouseOver: true
        })
    }

    handleMouseLeave = () => {
        this.setState({
            mouseOver: false
        })
    }

    handleClick = () => {
        let {url} = this.props;
        window.open(url, '_blank');
    }
    
    render(){
        let {icon, name, className, number} = this.props;
        let {mouseOver} = this.state;
        let pop;
        if(mouseOver){
            pop =          
        }
        
        return (
            <div key={"button" + number}>
                {pop}
                <div 
                    id={"icon" + number } 
                    className={className} 
                    onMouseOver={this.handleMouseOver} 
                    onMouseLeave={this.handleMouseLeave}
                    onClick={this.handleClick}
                    >
                    <i className={icon + "fa-3x social"}></i>
                </div>
            </div>
        )
    }
}

export default Button;