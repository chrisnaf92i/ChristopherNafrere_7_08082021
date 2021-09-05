import React, { Component } from 'react'

export default class Commentary extends Component {
    data = this.props.data
    render() {
        return (
            <div style={{borderBottom:"1px solid black", padding:"10px"}}>
            <header style={{display:'flex', justifyContent:"space-between" , alignItems:"center"}}>
                <div style={{display:"flex", alignItems:"center"}} >
                    <h3 style={{textTransform:"capitalize"}}>{this.data.last_name} {this.data.first_name}</h3>
                </div>
                <p>
                    this.data.date
                </p>
            </header>

            <section>
                <p style={{margin:0}}>{this.data.content}</p>
            </section>
        </div>
        )
    }
}
