import React, { Component, Fragment} from 'react'
import defaultPPimg from "../../../images/user-icon.png"
export default class Post extends Component {
    data = this.props.data
    handleClickDelete = () => 
    {
        console.log(this.data.id)
        fetch(`/api/post/${this.data.id}`, {method:"delete"})
        alert("publication Supprimer");
        window.location.reload()
    }

    render() {
        return (
            <div style={{width:'50%', margin:"25px auto", padding:"15px", border:"1px solid black", borderRadius:"25px"}}>
                <header style={{display:'flex', justifyContent:"space-between" , alignItems:"center"}}>
                    <div style={{display:"flex", alignItems:"center"}} >
                        {this.data.profile_image_url ? 
                            <img src={this.data.profile_image_url} style={{objectFit:"cover", width:"60px", height:"60px", borderRadius:"100%", margin:"15px"}}/> 
                            
                            :
                            
                            <img src={defaultPPimg}  style={{objectFit:"cover", width:"60px", height:"60px", borderRadius:"100%", margin:"15px"}}/>
                        } 
                         <h2 style={{textTransform:"capitalize"}}>{this.data.last_name} {this.data.first_name} </h2>
                    </div>
                    <p>
                        {this.data.date_publication.split("-").join(" ").split("T").join(" - ").split(".000Z")}
                    </p>
                </header>
                <section style={{width:"80%", margin:"auto"}}>
                    <p style={{textAlign:"center"}}>{this.data.content}</p>
                    {this.data.image_url ? <img style={{width:"100%"}} src={this.data.image_url}/> : <Fragment/> }
                </section>
                <footer>
                    <div style={{display:'flex', justifyContent:"center"}}>
                        <button onClick={this.onClickLike} style={{borderRadius:"0px", border:"1px solid black", margin:"10px", cursor:"pointer", }}><i className="fas fa-thumbs-up"></i> Like</button>
                        <button onClick={this.onClickDislike} style={{borderRadius:"0px", border:"1px solid black", margin:"10px", cursor:"pointer"}}><i className="fas fa-thumbs-down"></i> Dislike</button>
                        <button style={{borderRadius:"0px", border:"1px solid black", margin:"10px", cursor:"pointer"}}><i className="fas fa-comment"></i> Commenter</button>
                        <button onClick={this.handleClickDelete} style={{borderRadius:"0px", border:"1px solid black", margin:"10px", cursor:"pointer"}}><i class="fas fa-trash-alt"></i> Delete</button>
                    </div>

{/*                     <div style={{ overflow:"hidden", marginTop:"25px", borderRadius:"0 0 15px 15px", border:"1px solid black",}}>
                        {this.data.commentary.map((commentary, i) => {
                            return(
                                <Commentary key={i} data={commentary}/>
                            )
                        })}
                        
                        <Commentary/>
                        <Commentary/>
                        <Commentary/>
                    </div> */}
                </footer>
            </div>
        )
    }
}
