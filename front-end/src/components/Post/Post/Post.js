import React, { Component, Fragment} from 'react'
import defaultPPimg from "../../../images/user-icon.png"
import Commentary from './Commentary'
import NewCommentary from './NewCommentary'

export default class Post extends Component {
    constructor(props){
        super(props)

        const userData = JSON.parse(sessionStorage.user)

        console.log(userData)
        this.state={
            allCommentary:"",
            canComment:false,
            user:userData.userId,
            role:userData.role,
            like:0
        }
    }

    data = this.props.data

    getCommentary = async () =>
    {
        const reponse = await fetch(`api/post/commentary/${this.data.id}`)
        const data = await reponse.json()
        this.setState({...this.state, allCommentary:data.allCommentary})
    }


    componentDidMount()
    {
        this.getCommentary()

    }

    handleClickDelete = () => 
    {
        console.log(this.data.id)
        fetch(`/api/post/${this.data.id}`, {method:"delete"})
        alert("publication Supprimer");
        window.location.reload()
    }

    handleClickCommentary = () => {
        if(this.state.canComment)
        {
            this.setState({canComment:false})
        }else
        {
            this.setState({canComment:true})
        }
        console.log(this.state.allCommentary)

    }

    onClickLike = async () => {
        if(this.state.like == null || this.state.like == 0)
        {
            await this.setState({...this.state, like:1})
            console.log(this.state.like)
            const requestBody = {like:this.state.like, user_id:this.state.user}
             
            await fetch(`/api/post/like/${this.data.id}`, {method:"post", headers:{"Content-Type":"application/json"}, body:JSON.stringify(requestBody)})
        } else if(this.state.like == 1)
        {
            await this.setState({...this.state, like:0})
            const requestBody = {like:this.state.like, user_id:this.state.user}
         
            await fetch(`/api/post/like/${this.data.id}`, {method:"post", headers:{"Content-Type":"application/json"}, body:JSON.stringify(requestBody)})

        }
    }

    onClickDislike = async() => {
        if(this.state.like == null || this.state.like == 0)
        {
            await this.setState({...this.state, like:-1})
            this.data.dislikes += 1
            const requestBody = {like:this.state.like, user_id:this.state.user}
         
            await fetch(`/api/post/like/${this.data.id}`, {method:"post", headers:{"Content-Type":"application/json"}, body:JSON.stringify(requestBody)})


        }else if(this.state.like == -1)
        {
            await this.setState({...this.state, like:0})
            this.data.dislikes -= 1
            const requestBody = {like:this.state.like, user_id:this.state.user}
         
            await fetch(`/api/post/like/${this.data.id}`, {method:"post", headers:{"Content-Type":"application/json"}, body:JSON.stringify(requestBody)})

        }
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
                </section>
                <footer>
                    <div style={{display:'flex', justifyContent:"center"}}>
                        <button type="button" onClick={this.onClickLike} style={{
                                boxShadow:"1px 1px 6px black" ,
                                borderRadius:"10px", 
                                /* border:"1px solid black",  */
                                margin:"10px", cursor:"pointer", 
                                backgroundColor:this.state.like == 1 ? "cyan" : "white", 
                                color:this.state.like == 1 ? "white" : "black", 
                                opacity: this.state.like == -1 ? "0.5" : 1 ,
                                transition:"250ms"
                            }}>
                                {this.data.likes}
                                <br/>
                                <i className="fas fa-thumbs-up">
                                </i> Like
                            </button>
                        
                        <button type="button" onClick={this.onClickDislike} style={{
                                boxShadow:"1px 1px 6px black" ,
                                borderRadius:"10px", 
                                /* border:"1px solid black",  */
                                margin:"10px", cursor:"pointer", 
                                backgroundColor:this.state.like == -1 ? "red" : "white", 
                                color:this.state.like == -1 ? "white" : "black", 
                                opacity: this.state.like == 1 ? "0.5" : 1 ,
                                transition:"250ms"
                            }}>
                                {this.data.dislikes}
                                <br/>
                                <i class="fas fa-thumbs-down">
                                </i> dislike
                            </button>
                        
                        <button type="button" onClick={this.handleClickCommentary} style={{boxShadow:"1px 1px 6px black" ,borderRadius:"10px",backgroundColor:'white',  /* border:"1px solid black",  */margin:"10px", cursor:"pointer"}}><i className="fas fa-comment"></i> Commenter</button>
                        
                        {this.state.user == this.data.user_id || this.state.role == 0 ? 
                            <button onClick={this.handleClickDelete} style={{boxShadow:"1px 1px 6px black" ,borderRadius:"10px", backgroundColor:'red', color:"white", /* border:"1px solid black",  */margin:"10px", cursor:"pointer"}}><i class="fas fa-trash-alt"></i> Delete</button> 
                            : 
                            <Fragment/>
                        }

                        
                    </div>
                   
                    
                    {this.state.canComment ? 
                        <div style={{ overflow:"hidden", paddingTop:"25px", borderRadius:"0 0 15px 15px", borderTop:"1px solid black",}}>
                            {
                                this.state.allCommentary.map(commentary => {
                                            return(
                                                <Commentary data={commentary}/>
                                            )
                                        }
                                    )
                            }
                            <NewCommentary postId={this.data.id}/> 
                        </div>
                    : <Fragment/>}


                </footer>
            </div>
        )
    }
}
