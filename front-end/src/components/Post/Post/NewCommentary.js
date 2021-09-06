import React, { Component } from 'react'

export default class NewCommentary extends Component {
    constructor(props)
    {
        super(props)

        const userData = JSON.parse(sessionStorage.user)

        this.state = {
            id:this.props.postId,
            user:userData.userId,
            content:"",
            imageUrl:"",
            date:""
        }
    }
    handleChange = (event) => {
        this.setState({...this.state, content:event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let today = new Date()
        this.state.date = `${today.getFullYear()}-${today.getMonth() < 10 ? `0${today.getMonth()}` : `${today.getMonth()}`}-${today.getDate()}  ${today.getHours() < 10 ? `0${today.getHours()}` : `${today.getHours()}`}:${today.getMinutes() < 10 ? `0${today.getMinutes()}`:`${today.getMinutes()}`}`
         fetch(`/api/post/commentary/${this.state.id}`,{method:"post", headers:{"Content-Type":"application/json"}, body:JSON.stringify(this.state)})
        alert("création d'un commentaire")
        window.location.reload()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} style={{display:"flex", justifyContent:"center"}} >    
                    <input onChange={this.handleChange} type="text" style={{width:"50%", textTransform:"none"}} required/>
                    <input type="submit" style={{cursor:"pointer", width:"15%", margin:"15px"}}/>
                </form>
            </div>
        )
    }
}
