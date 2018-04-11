import React, {Component} from 'react';
import {Icon, List} from 'semantic-ui-react';

class Subtitle extends Component{
    render(){
        return(
            <div id={this.props.id}>
            <List horizontal >
                <List.Item>
                    <List.Content>
                        <List.Header>Senior Leader in Product Management,</List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    {/* <Icon name="circle" className="bullets" /> */}
                    <List.Content>
                        <List.Header>Full-Stack JS Developer,</List.Header>
                    </List.Content>
                </List.Item> 
                <List.Item>
                    {/* <Icon name="circle" className="bullets" /> */}
                    <List.Content>
                        <List.Header>Health Care Professional</List.Header>
                    </List.Content>
                </List.Item>
            </List>
            </div>
        )
    }
}

export default Subtitle;