import React, { Component } from 'react';

export default class login extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: ''
        }
        this.loginAlert = this.loginAlert.bind(this);
    }
        userhandler(input) {
            this.setState({userName: input})
        }
    
        passhandler(input) {
            this.setState({password: input})
        }

        loginAlert() {
            alert(`User name: ${this.state.userName} Password: ${this.state.password}`)
        }
    
        render() {
            return (
                <div className="App">
                <input onChange={e => this.userhandler(e.target.value)}/>
                <input onChange={e => this.passhandler(e.target.value)}/>
                <button onClick={() => this.loginAlert()}>Login</button>
            </div>
        );
    }
}