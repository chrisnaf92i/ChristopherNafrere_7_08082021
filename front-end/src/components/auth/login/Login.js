import React, { Component } from 'react'
import "./login.css"

export default class Login extends Component {
    constructor(props)
    {
        super(props)

        this.state = {
            email:"",
            password:""
        }
    }

    handleChangeEmail = (event) => {
        this.state.email = event.target.value
        console.log(this.state.email)
    }

    handleChangePassword = (event) => {
        this.state.password = event.target.value
        console.log(this.state.password)
    }

    handleSubmit = (event) => 
    {
        console.log(JSON.stringify(this.state))
        fetch("/api/auth/login", {method:"post",headers: {"ContentType":"application/json"}, body:JSON.stringify(this.state)})
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}  style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <div>
                    <label for="email">Email :</label>
                    <br/>
                    <input onChange={this.handleChangeEmail} type="email" id="email" required/>
                </div>
                <br/>
                <br/>
                <div>
                    <label for="password">Mot de passe : </label>
                    <br/>
                    <input onChange={this.handleChangePassword} type="password" id="password" required/>
                </div>
                <br/>
                <br/>
                <input  type="submit"/>
            </form>
        )
    }
}
