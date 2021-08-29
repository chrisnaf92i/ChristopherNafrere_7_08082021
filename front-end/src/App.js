import React, { Component, Fragment } from 'react'
import Signup from './components/auth/signup/Signup'
import "./App.css"
import Login from './components/auth/login/Login'
import LeftNavigation from './components/navigation/LeftNavigation'
import PostPage from "./components/Post/PostPage"
import {BrowserRouter as Router, Route} from "react-router-dom"
import UserPage from './UserPage'

export default class App extends Component {
    state = {connexion:false}
    
     
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
                                <a href="/login" style={{borderBottom:this.state.registered ? "1px solid black" : "none", color:"black", textDecoration:"none"}} ><h3><i className="fas fa-sign-in-alt"></i> S'identifier</h3></a>
                                <a href="/signup" style={{borderBottom:this.state.registered ? "none" : "1px solid black", color:"black", textDecoration:"none"}} ><h3><i className="fas fa-user-plus"></i> S'inscrire</h3></a>
                            </Fragment>
                        }
                    </nav>
                </header>



                <section style={{display:'flex',justifyContent:"space-between"}}>

                    <LeftNavigation/>

                    <Router>
                        <Route path="/login" component={Login}/>
                        <Route path="/signup" component={Signup}/>
                        <Route path="/post" component={PostPage}/>
                        <Route path="/user" component={UserPage}/>
                    </Router>


                    {/* 
                    {this.state.connexion ? 
                        <Fragment>
                            <PostPage/>
                        </Fragment>
                        : 
                        <Fragment>
                            {this.state.registered ? <Login/> : <Signup/>}
                        </Fragment>
                    } */}
                    
                </section>
            </div>
        )
    }
}
