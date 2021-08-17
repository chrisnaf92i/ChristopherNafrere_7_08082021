import React, { Component} from 'react'
import "./signup.css"

export default class Signup extends Component {
    render() {
        return (
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <div>
                    <label htmlFor="name">Nom :</label>
                    <br/>
                    <input type="text" id="name"  placeholder="ex : kirstein"/>
                </div>
                    
                <br/>
                <br/>

                <div>
                    <label htmlFor="first-name">Prénom :</label>
                    <br/>
                    <input type="text" id="first-name" placeholder="ex : jean"/>
                </div>
                    
                <br/>
                <br/>

                <div>
                    <label htmlFor="birthday">Date de naissance :</label>
                    <br/>
                    <input type="date" id="birthday"/>
                </div>
                    
                <br/>
                <br/>
                
                <div>
                    <label htmlFor="email">email :</label>
                    <br/>
                    <input type="email" id="email" placeholder="ex : exemple@mail.fr"/>
                </div>
                    
                <br/>
                <br/>


                <div>
                    <label htmlFor="password">Mot de passe :</label>
                    <br/>
                    <input type="password" id="password"/>
                </div>
                    
                <br/>
                <br/>

                <button className="btn-signup">S'inscrire</button>

            </div>
        )
    }
}
