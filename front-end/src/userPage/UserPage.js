import React, { Component} from 'react'
import defaultProfileImage from "../images/user-icon.png"

export default class UserPage extends Component {

    constructor(props)
    {
        super(props)
        
        this.state = ({user:{}, biography:""})
    }

    callApi = async () => 
    {
        const user = JSON.parse(sessionStorage.user)

        console.log(user)
        const data = await fetch(`/api/user/${user.userId}`)

        const json = await data.json()
        
        console.log(json)
        this.setState({user:json})
    }

    componentDidMount()
    {
        this.callApi()
    }

    handleChangeBiography = (event) => {
        this.setState({biography:event.target.value})
    }

    handleSendNewBiography = async (event) => 
    {
        console.log(this.state.user.id)
        await fetch(`/api/user/biography/${this.state.user.id}`, {method:"post", headers:{"Content-Type":"application/json"}, body:JSON.stringify({biography:this.state.biography})}) 
        window.location.reload()
    }

    handleClickDelete = async () => {
        let deleteConfirmation; 
        deleteConfirmation = window.confirm("est tu sûr de vouloir supprimer ton compte ?")
        if(deleteConfirmation)
        {
            await fetch(`/api/user/delete/${this.state.user.id}`, {method:"delete"})
            sessionStorage.user = null
            window.open("/login", "_self")
        }
    }

    render() {
        return (
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"100%"}}>
                <img src={defaultProfileImage} alt="photo de profile" style={{width:"400px", height:"400px", borderRadius:"100%", objectFit:"cover", boxShadow:"1px 1px 10 px black"}}/>
                <input type="file"/>
                <h2 style={{textTransform:"capitalize"}}>{this.state.user.last_name} {this.state.user.first_name}</h2>
                <p style={{fontSize:"20px", width:"40%"}}>  
                    Description : 
                    <br/>
                    <br/>
                    {this.state.user.biography}
                </p>
                
                <form onSubmit={this.handleSendNewBiography} style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"15px"}}>
                    <textarea  onChange={this.handleChangeBiography} cols="100" rows="10" style={{maxWidth:"60%", minWidth:"60%", fontSize:"18px"}}/>
                    <br/>
                    <button type="submit" style={{cursor:"pointer"}}>Enregistrer la description</button>
                </form>

                <button onClick={this.handleClickDelete} type="button" style={{backgroundColor:"red"}}> Delete User</button>
            </div>
        )
    }
}
