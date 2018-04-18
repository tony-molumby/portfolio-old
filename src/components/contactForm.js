import React, {Component} from 'react';
import {Form, Input, TextArea, Button} from 'semantic-ui-react';

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state= {
            name: "",
            email: "",
            message: "",
            nameErr: "",
            emailErr: "",
            messageErr: "",
            sendMessage: "",
        }
    }

    handleChange = (e, {name, value}) => {
        this.setState({
            [name]: value
        });
    }

    render(){
        let {
                name, 
                email, 
                message, 
                nameErr,
                emailErr,
                messageErr,
                sendMessage
            } = this.state;
        
        return(

            <Form 
                id={this.props.id}
                action="https://formspree.io/tony.molumby@gmail.com"
                method="POST"
                data-aos="fade-up"
                data-aos-duration={this.props.duration}
                className="container"
            >
                <Form.Field id="name">
                    {nameErr}
                    <Input 
                        placeholder="name" 
                        className="inputs" 
                        icon="id badge"
                        iconPosition="left"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field id="email">
                    {emailErr}
                    <Input 
                        placeholder="email" 
                        className="inputs" 
                        icon="mail outline"
                        iconPosition="left"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field id="message">
                    {messageErr}
                    <TextArea 
                        placeholder="type in a message" 
                        className="message"
                        name="message"
                        value={message} 
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field id="subject">
                    <Input
                        type="hidden"
                        className="message"
                        name="_subject"
                        value="New Message from your portfolio site!"
                    />
                </Form.Field>
                <Form.Field id="gotcha">
                    <Input
                        name="_gotcha"
                    />
                </Form.Field>
                <Button 
                    size="large" 
                    id="submit"
                    type="submit"
                    // onClick={this.handleSubmit}
                    >Send
                </Button>
                <div id="send-message">
                    {sendMessage}
                </div>
    
            </Form>
            
        )
    }
}

export default ContactForm;