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

    handleSubmit = async (event) => 
    {        
        event.preventDefault()
        
        let response = await fetch("/api/auth/login", {method:"post",headers: {"Content-Type":"application/json"}, body:JSON.stringify(this.state)})
       
        let jwt = await response.json()

        sessionStorage.user = JSON.stringify(jwt)

        alert("connexion")

        window.open("/post", "_self")

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}  style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <div>
                    <label for="email">Email :</label>
                    <br/>
                    <input style={{width:"100%"}} onChange={this.handleChangeEmail} type="email" id="email" required/>
                </div>
                <br/>
                <br/>
                <div>
                    <label for="password">Mot de passe : </label>
                    <br/>
                    <input style={{width:"100%"}} onChange={this.handleChangePassword} type="password" id="password" required/>
                </div>
                <br/>
                <br/>
                <button type="submit">Connexion</button>
            </form>
        )
    }
}
