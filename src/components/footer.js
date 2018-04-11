import React, {Component} from 'react';
import {Header, Icon, Popup} from 'semantic-ui-react';

class Footer extends Component {
    
    handleClick = (e) => {
        console.log('clicked');
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
             window.requestAnimationFrame(this.handleClick);
             window.scrollTo (0,currentScroll - (currentScroll/20));
        }
    }

        

    render(){
        return(
            <div id={this.props.id} className={this.props.className}>
                <Header id="copyright" as='h4' inverted>&copy; 2018 TONY MOLUMBY </Header>
                <Popup
                    trigger={
                        <Icon
                        id="go-up"
                        inverted
                            link 
                            name="chevron circle up" 
                            onClick={this.handleClick} 
                        />
                    }
                    
                    content='Go to top'
                />
            </div>
        )
    }
}

export default Footer;