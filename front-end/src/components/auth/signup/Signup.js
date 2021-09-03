import React, { Component} from 'react'
import "./signup.css"

export default class Signup extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            lastName:"",
            firstName:"",
            birthday:"",
            email:"",
            password:""
        }
    }

    handleChangeLastName = (event) => {
        this.state.lastName = event.target.value
        console.log(this.state.lastName)
    }

    handleChangeFirstName = (event) => {
        this.state.firstName = event.target.value
        console.log(this.state.firstName)
    }


    handleChangeEmail = (event) =>
    {
        this.state.email = event.target.value
        console.log(this.state.email)
    }

    handleChangePassword = (event) =>
    {
        this.state.password = event.target.value
        console.log(this.state.password)
    }

    handleChangeBirthday = (event) => 
    {
        this.state.birthday = event.target.value
        console.log(this.state.birthday)
    }

    handleSubmit = (event) => {

        fetch("/api/auth/signup", {method:"post",headers:{"Content-Type":"application/json"}, body:JSON.stringify(this.state)})
        sessionStorage.user = null
        alert("Inscription Réalisé");
        window.open("/login", "_self")


        event.preventDefault();
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{width:"30%", margin:"auto", display:'flex', flexDirection:"column"}}>
                <div style={{margin:"25px"}}>
                    <label htmlFor="name">Nom :</label>
                    <br/>
                    <input type="text" onChange={this.handleChangeLastName} id="name"  placeholder="ex : kirstein" required/>
                </div>
                    
                <br/>
                <br/>

                <div style={{margin:"25px"}}>
                    <label htmlFor="first-name">Prénom :</label>
                    <br/>
                    <input onChange={this.handleChangeFirstName}  type="text" id="first-name" placeholder="ex : jean" required/>
                </div>
                    
                <br/>
                <br/>

                <div style={{margin:"25px"}}>
                    <label htmlFor="birthday">Date de naissance :</label>
                    <br/>
                    <input onChange={this.handleChangeBirthday} type="date" id="birthday" required/>
                </div>
                    
                <br/>
                <br/>
                
                <div style={{margin:"25px"}}>
                    <label htmlFor="email">email :</label>
                    <br/>
                    <input onChange={this.handleChangeEmail} type="email" id="email" placeholder="ex : exemple@mail.fr" required/>
                </div>
                    
                <br/>
                <br/>


                <div style={{margin:"25px"}}>
                    <label htmlFor="password">Mot de passe :</label>
                    <br/>
                    <input onChange={this.handleChangePassword} type="password" id="password" required/>
                </div>
                    
                <br/>
                <br/>

                <input type="submit" value="S'inscrire" style={{width: "50%", margin:"auto"}} required/>
            </form>
        )
    }
}
