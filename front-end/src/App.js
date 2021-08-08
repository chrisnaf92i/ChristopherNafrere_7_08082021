import React, { Component, Fragment } from 'react'
import Signup from './components/auth/signup/Signup'
import "./App.css"
import Login from './components/auth/login/Login'

export default class App extends Component {
    state= {connexion:false, registered:false  }

    openSignup = () => {this.state.registered = false}
    openLogin = () => {this.state.registered = true}
     
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Groupomania</h1>
                    <nav className="Nav-right">
                        {this.state.connexion ? 
                            <Fragment>
                                <h2>Mon compte</h2>
                                <h2>Se Déconnecter</h2>
                            </Fragment> 
                            : 
                            <Fragment>
                                <h2 onClick={() => this.setState({registered:true})}>S'identifier</h2>
                                <h2 onClick={() =>  this.setState({registered:false})}>S'inscrire</h2>
                            </Fragment>
                        }
                    </nav>
                </header>

                <section>
                    {this.state.registered ? <Login/> : <Signup/>}
                </section>
            </div>
        )
    }
}
