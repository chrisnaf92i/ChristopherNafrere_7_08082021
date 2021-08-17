import React, { Component} from 'react'

export default class CreatePost extends Component {
    render() {
        return (
            <article style={{display:"flex", width:"50%", margin:"auto",flexDirection:"column", justifyContent:"center", border:"1px solid black", borderRadius:"15px", padding:"25px"}} >
                <textArea cols="50" style={{ margin:"15px auto", width:"80%", height:"200px"}}/>
                <div style={{margin:"auto", width:"max-content"}}><i className="fas fa-images"></i> <input type="file" /></div>
                <button style={{margin:"15px auto"}}>Publier</button>
            </article>
        )
    }
}
