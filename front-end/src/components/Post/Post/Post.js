import React, { Component, Fragment } from 'react'
import Commentary from './Commentary'

export default class Post extends Component {
    data = this.props.data
    render() {
        return (
            <div style={{width:'50%', margin:"25px auto", padding:"15px", border:"1px solid black", borderRadius:"25px"}}>
                <header style={{display:'flex', justifyContent:"space-between" , alignItems:"center"}}>
                    <div style={{display:"flex", alignItems:"center"}} >
                        <img style={{borderRadius:"100%", width:"50px", height:"50px", objectFit:"cover"}} src="https://img-19.ccm2.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"/>
                        <h2>{this.data.userName}</h2>
                    </div>
                    <p>
                        {this.data.time.day}/{this.data.time.month}/{this.data.time.years} - {this.data.time.hour}:{this.data.time.minute}
                    </p>
                </header>
                <section style={{width:"80%", margin:"auto"}}>
                    <p style={{textAlign:"center"}}>{this.data.content}</p>
                    {this.data.imageUrl ? <img style={{width:"100%"}} src={this.data.imageUrl}/> : <Fragment/> }
                </section>
                <footer>
                    <div style={{display:'flex', justifyContent:"center"}}>
                        <button style={{borderRadius:"0px", border:"1px solid black"}}><i className="fas fa-thumbs-up"></i> Like</button>
                        <button style={{borderRadius:"0px", border:"1px solid black"}}><i className="fas fa-thumbs-down"></i> Dislike</button>
                        <button style={{borderRadius:"0px", border:"1px solid black"}}><i className="fas fa-comment"></i> Commenter</button>
                    </div>

                    <div style={{ overflow:"hidden", marginTop:"25px", borderRadius:"0 0 15px 15px", border:"1px solid black",}}>
                        {this.data.commentary.map((commentary, i) => {
                            return(
                                <Commentary key={i} data={commentary}/>
                            )
                        })}
                        
                        <Commentary/>
                        <Commentary/>
                        <Commentary/>
                    </div>
                </footer>
            </div>
        )
    }
}
