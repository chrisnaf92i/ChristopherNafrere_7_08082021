import React, { Component, Fragment } from 'react'
import Signup from './components/auth/signup/Signup'
import "./App.css"
import Login from './components/auth/login/Login'
import LeftNavigation from './components/navigation/LeftNavigation'
import PostPage from "./components/Post/PostPage"
import {BrowserRouter as Router, Route} from "react-router-dom"
import UserPage from './UserPage'
import logo from "./logo.png"

export default class App extends Component {
    
    constructor(props)
    {
        super(props)
        

        this.state = ({connexion:false})

        const user = JSON.parse(sessionStorage.user)
        console.log(user)
 
        if(!user)
        {
            this.state = ({connexion:false})
        }
        else
        {
            this.state = ({connexion:true})
        } 
    }

    componentDidMount(){
        sessionStorage.user = null
    }
     
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Groupomania</h1>
                    <img src={logo}/>
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
