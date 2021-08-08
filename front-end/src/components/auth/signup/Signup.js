import React, { Component, Fragment } from 'react'
import "./signup.css"

export default class Signup extends Component {
    render() {
        return (
            <div style={{margin:"auto"}}>
                <label htmlFor="name">Nom :</label>
                <br/>
                <input type="text" id="name"  placeholder="ex : kirstein"/>

                <br/>
                <br/>

                <label htmlFor="first-name">Prénom :</label>
                <br/>
                <input type="text" id="first-name" placeholder="ex : jean"/>

                <br/>
                <br/>

                <label htmlFor="birthday">Date de naissance :</label>
                <br/>
                <input type="date" id="birthday"/>

                <br/>
                <br/>
                
                <label htmlFor="email">email :</label>
                <br/>
                <input type="text" id="email" placeholder="ex : exemple@mail.fr"/>

                <br/>
                <br/>


                <label htmlFor="password">Mot de passe :</label>
                <br/>
                <input type="password" id="password" placeholder=""/>

                <br/>
                <br/>

                <button className="btn-signup">S'inscrire</button>

            </div>
        )
    }
}
