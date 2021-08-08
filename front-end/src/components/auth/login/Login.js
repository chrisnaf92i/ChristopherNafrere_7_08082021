import React, { Component } from 'react'
import "./login.css"

export default class Login extends Component {
    render() {
        return (
            <div  style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <div>
                    <label for="email">Email :</label>
                    <br/>
                    <input type="email" id="email"/>
                </div>
                <br/>
                <br/>
                <div>
                    <label for="password">Mot de passe : </label>
                    <br/>
                    <input type="password" id="password"/>
                </div>
                <br/>
                <br/>
                <button className="btn-connexion">Se connecter</button>
            </div>
        )
    }
}
