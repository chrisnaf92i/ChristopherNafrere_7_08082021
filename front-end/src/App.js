import React, { Component, Fragment } from 'react'
import Signup from './components/auth/signup/Signup'
import "./App.css"
import Login from './components/auth/login/Login'
import LeftNavigation from './components/navigation/LeftNavigation'
import PostPage from "./components/Post/PostPage"

export default class App extends Component {
    state = {connexion:true, registered:false  }

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
                                <h3> <i className="fas fa-user"></i> Mon compte</h3>
                                <h3><i className="fas fa-envelope"></i> Message</h3>
                                <h3 onClick={() => this.setState({connexion:false})}> <i className="fas fa-sign-out-alt"></i> Se Déconnecter</h3>
                            </Fragment> 
                            : 
                            <Fragment>
                                <h3 style={{borderBottom:this.state.registered ? "1px solid black" : "none"}} onClick={() => this.setState({registered:true})}><i className="fas fa-sign-in-alt"></i> S'identifier</h3>
                                <h3 style={{borderBottom:this.state.registered ? "none" : "1px solid black"}} onClick={() =>  this.setState({registered:false})}><i className="fas fa-user-plus"></i> S'inscrire</h3>
                            </Fragment>
                        }
                    </nav>
                </header>

                <section style={{display:'flex',justifyContent:this.state.connexion ? "space-between" : "center"}}>

                    {this.state.connexion ? 
                        <Fragment>
                            <LeftNavigation/>
                            <PostPage/>
                        </Fragment>
                        : 
                        <Fragment>
                            {this.state.registered ? <Login/> : <Signup/>}
                        </Fragment>
                    }
                    
                </section>
            </div>
        )
    }
}
