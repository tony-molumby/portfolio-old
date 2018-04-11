import React, {Component} from 'react';
import {Message, Label, Form, Input, TextArea, Button} from 'semantic-ui-react';

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state= {
            name: "",
            email: "",
            message: "",
            math: [],
            nameErr: "",
            emailErr: "",
            messageErr: "",
            sendMessage: ""
        }
    }

    componentWillMount(){
        let nums = [];
        let min = 0;
        let max = 30;
        for(let i = 0; i < 2; i ++){
            nums.push(this.getRandomNum(min, max))
        }
        this.setState({
            math: nums
        })
    }

    //may need this to stop spam
    getRandomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    handleChange = (e, {name, value}) => {
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let err = this.validate();
        if(!err){
            this.sendForm();
        }
    }
    
    sendForm = () => {
        let xhr = new XMLHttpRequest();
        const url = 'https://formspree.io/tony.molumby@gmail.com';
        
        xhr.open('POST', url, true);
        xhr.onload = () => {
            if(xhr.status === 200){
                    this.setState({
                        name: "",
                        email: "",
                        message: "",
                        math: [],
                        nameErr: "",
                        emailErr: "",
                        messageErr: "",
                        sendMessage: <Message compact>
                                        Message sent! I will get back to you as soon as possible.
                                    </Message>
                    });
            } else if(xhr.status === 404  || xhr.status === 400){
                this.setState({
                    sendMessage: <Message compact>
                                    Something went wrong on the server side.  
                                    Try again later.
                                </Message>
                });
            }
        }
        xhr.onerror = () => {
            this.setState({
                sendMessage: <Message compact>
                                Something went wrong on the client side.  
                                Make sure you have JS enabled.
                            </Message>
            })
                                
        }

        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(this.requestBuildQueryString());
    }
    
    requestBuildQueryString = () => {
        let queryString = Object.keys(this.state).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(this.state[key]);
        }).splice(0,3).join('&');
        return queryString;
    }
    


    validate = () => {
        let {name, email, message} = this.state;
        let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        let errors = {};
        let isError = false
        if(name.length < 2) {
            isError = true;
            errors.nameErr = <Label basic color="red" pointing="below">Please enter a valid name.</Label>;
        }
        if(!re.test(email)){
            isError = true;
            errors.emailErr = <Label basic color="red" pointing="below">Please enter a valid email.</Label>;
        }
        if(message.length < 10){
            isError = true;
            errors.messageErr = <Label basic color="red" pointing="below">Please enter a longer message.</Label>;
        }

        this.setState({
            ...this.state,
            ...errors
        })
        
        return isError;
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
                    onClick={this.handleSubmit}
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