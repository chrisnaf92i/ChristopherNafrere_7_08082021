import React, { Component } from 'react'
import "./login.css"

export default class Login extends Component {
    render() {
        return (
            <div>
                <label for="email">Email :</label>
                <br/>
                <input type="email" id="email"/>
                <br/>
                <br/>
                <label for="password">Mot de passe : </label>
                <br/>
                <input type="password" id="password"/>
                <br/>
                <br/>
                <button className="btn-connexion">Se connecter</button>
            </div>
        )
    }
}
