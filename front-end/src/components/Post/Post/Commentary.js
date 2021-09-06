import React, { Component, Fragment } from 'react'

export default class Commentary extends Component {

    constructor(props)
    {
        super(props)


        const user = JSON.parse(sessionStorage.user)
        this.state = {user:user}
    }

    data = this.props.data

    handleClickDelete = () => {
        fetch(`/api/post/commentary/${this.data.id}`, {method:"delete"})
        alert("publication Supprimer");
        window.location.reload()
    }

    render() {
        return (
            <div style={{borderBottom:"1px solid black", padding:"10px"}}>
            <header style={{display:'flex', justifyContent:"space-between"}}>
                <div style={{display:"flex", alignItems:"center"}} >
                    <h3 style={{textTransform:"capitalize"}}>{this.data.last_name} {this.data.first_name}</h3>
                </div>
                <p>
                    {this.data.date_publication.split("-").join(" ").split("T").join(" - ").split(".000Z")}
                    <br/>
                    {this.state.user.userId == this.data.user_id  || this.state.user.role == 0?
                        <button onClick={this.handleClickDelete} style={{width:"50%", boxShadow:"1px 1px 6px black" ,borderRadius:"10px", backgroundColor:'red', color:"white", /* border:"1px solid black",  */margin:"10px", cursor:"pointer"}}><i class="fas fa-trash-alt"></i> Delete</button> 
                        :
                        <Fragment/>
                    }

                </p>
            </header>
            

            {/* this.state.user == this.data.user_id || this.state.role == 0 ? 
                            : 
                            <Fragment/> */
                        }
            <section>
                <p style={{margin:0}}>{this.data.content}</p>
                
            </section>
        </div>
        )
    }
}
