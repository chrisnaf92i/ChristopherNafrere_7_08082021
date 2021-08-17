import React, { Component } from 'react'

export default class LeftNavigation extends Component {
    render() {
        return (
            <aside style={{paddingRight:"15px", borderRight:"1px solid black", width:"15%"}}>
                <ul style={{listStyleType:"none"}}>
                    <li><i className="fas fa-user"></i> Mon compte</li>
                    <li>Multimedia</li>
                    <li>News</li>
                    <li><i className="fas fa-sliders-h"></i> Paramètre</li>

                </ul>
            </aside>
        )
    }
}
