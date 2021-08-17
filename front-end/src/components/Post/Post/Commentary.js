import React, { Component } from 'react'

export default class Commentary extends Component {
    data = this.props.data
    render() {
        return (
            <div style={{borderBottom:"1px solid black", padding:"10px"}}>
            <header style={{display:'flex', justifyContent:"space-between" , alignItems:"center"}}>
                <div style={{display:"flex", alignItems:"center"}} >
                    <img style={{borderRadius:"100%", width:"40px", height:"40px", objectFit:"cover"}} src="https://img-19.ccm2.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"/>
                    <h2></h2>
                </div>
                <p>
                    JJ/MM/AAA HH:MM
                </p>
            </header>

            <section>
                <p style={{margin:0}}>félicitiation pour ta prise de poste Chrisnaf</p>
                img
            </section>

            <footer>
                <button style={{borderRadius:"0px", border:"1px solid black"}}> <i className="fas fa-thumbs-up"></i> Like</button>
                <button style={{borderRadius:"0px", border:"1px solid black"}}><i className="fas fa-thumbs-down"></i> Dislike</button>
            </footer>
        </div>
        )
    }
}
