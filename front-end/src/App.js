import React, { Component, Fragment } from 'react'
import "./App.css"

export default class App extends Component {
    state= {connexion:false  }
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
                                <h2>S'identifier</h2>
                                <h2>S'inscrire</h2>
                            </Fragment>
                        }
                    </nav>
                </header>
            </div>
        )
    }
}
