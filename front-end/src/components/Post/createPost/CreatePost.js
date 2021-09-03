import React, { Component} from 'react'
import BoutonModal from './BoutonModal.js'

export default class CreatePost extends Component {
    constructor(props)
    {
        super(props)

        const user = JSON.parse(sessionStorage.user)
        console.log(user)
        this.state = {
            userId:user.userId,
            content:"",
            datePublication:"",
            imageUrl:"",
        }

    }

    handleSubmit = async (event) => 
    {
        let today = new Date()

        console.log(this.state)
     
        this.state.datePublication = `${today.getFullYear()}-${today.getMonth() < 10 ? `0${today.getMonth()}` : `${today.getMonth()}`}-${today.getDate()}  ${today.getHours() < 10 ? `0${today.getHours()}` : `${today.getHours()}`}:${today.getMinutes() < 10 ? `0${today.getMinutes()}`:`${today.getMinutes()}`}`
        this.setState({...this.state, datePublication:`${today.getFullYear()}-${today.getMonth() < 10 ? `0${today.getMonth()}` : `${today.getMonth()}`}-${today.getDate()}  ${today.getHours() < 10 ? `0${today.getHours()}` : `${today.getHours()}`}:${today.getMinutes() < 10 ? `0${today.getMinutes()}`:`${today.getMinutes()}`}`})
        
        console.log(this.state)
        
        await fetch("/api/post", {method:"post", headers:{"Content-Type":"application/json"}, body:JSON.stringify(this.state)}) 

         alert("création de la publication réussite")

         window.location.reload()
    }

    handleText = (event) => 
    {
        this.setState({...this.state, content:event.target.value})
        console.log(this.state.content)
    }

    handleChangeImage = (event) => 
    {
        this.setState({...this.state, imageUrl:event.target.value})
        console.log(this.state.content)
    }

    showModal = () => {

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} encType="multipart/form-data" style={{display:"flex", width:"50%", margin:"auto",flexDirection:"column", justifyContent:"center", border:"1px solid black", borderRadius:"15px", padding:"25px"}} >
                <h2>Nouvelle publication</h2>
                <textArea onChange={this.handleText} cols="50" style={{ margin:"15px auto", width:"60%", height:"200px"}}/>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <input type="file" style={{width:"50%"}}/>

                </div>
                <input type="submit" value="publier" style={{width:"30%", margin:"25px auto", cursor:"pointer"}}/>
            </form>
        )
    }
}

