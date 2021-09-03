import React, { Component } from 'react'

export default class LeftNavigation extends Component {
    render() {
        return (
            <aside style={{paddingRight:"15px", borderRight:"1px solid black", width:"15%"}}>
                <ul style={{listStyleType:"none"}}>
                    <a href="/user" style={{color:"black", textDecoration:"none" , cursor:"pointer"}}><i className="fas fa-user"></i> Mon compte</a>
                    <br/>
                    <br/>
                    <a href="/post" style={{color:"black", textDecoration:"none" , cursor:"pointer"}}>News</a>
                    <br/>
                    <br/>
                    <a href="/parameter" style={{color:"black", textDecoration:"none" , cursor:"pointer"}}><i className="fas fa-sliders-h"></i> Paramètre</a>

                </ul>
            </aside>
        )
    }
}
