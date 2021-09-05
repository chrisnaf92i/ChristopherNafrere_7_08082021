import React, { Component, Fragment } from 'react'
import Signup from './components/auth/signup/Signup'
import "./App.css"
import Login from './components/auth/login/Login'
import LeftNavigation from './components/navigation/LeftNavigation'
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import logo from "./logo.png"
import UserPage from './userPage/UserPage'
import PostPage from './components/Post/PostPage'

export default class App extends Component {
    
    constructor(props)
    {
        super(props)
        

        this.state = ({connexion:false})

        const user = JSON.parse(sessionStorage.user)
        console.log(user)
 

        const currentPath = window.location.pathname

        console.log(window.location.pathname)
        

        if(!user)
        { 
            this.state = ({connexion:false})
            if( currentPath == "/signup" || currentPath == "/login" )
            {
                console.log("vous pouvez vous connecter")
            }else
            {
                window.open("/login", "_self")
            }
        }
        else
        { 
            this.state = ({connexion:true})
        }  
    }
     
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/* <h1>Groupomania</h1> */}
                    <img src={logo} style={{width:"25%"}} />
                    <nav className="Nav-right">
                        {this.state.connexion ? 
                            <Fragment>
                                <h3 onClick={() => {sessionStorage.user = null; window.location.reload(); window.open("/login", "_self")}}> <i className="fas fa-sign-out-alt"></i> Se Déconnecter</h3>
                            </Fragment> 
                            : 
                            <Fragment>
                                <a href="/signup" style={{color:"black", textDecoration:"none"}} ><h3><i className="fas fa-user-plus"></i> S'inscrire</h3></a>
                                <a href="/login" style={{color:"black", textDecoration:"none"}} ><h3><i className="fas fa-sign-in-alt"></i> S'identifier</h3></a>
                            </Fragment>
                        }
                    </nav>
                </header>



                <section style={{display:'flex',justifyContent:"space-between"}}>
                    {this.state.connexion ? <LeftNavigation/> : <Fragment/>}
                    

                    <Router>
                        {
                            sessionStorage.user == null ? 
                            <Route exact path="/">
                                <Redirect to="/post"/>
                            </Route>
                            :
                            <Route exact path="/">
                                <Redirect to="/login"/>
                            </Route>
                        }
                        <Route path="/login" component={Login}/>
                        <Route path="/signup" component={Signup}/>
                        <Route path="/post" component={PostPage}/>
                        <Route path="/user" component={UserPage}/>
                    </Router>


                </section>
            </div>
        )
    }
}
