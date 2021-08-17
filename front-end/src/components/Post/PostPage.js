import React, { Component } from 'react'
import CreatePost from "./createPost/CreatePost"
import listPost from './listPost'
import Post from './Post/Post'

export default class PostPage extends Component {
    render() {
        return (
            <article style={{width:"100%"}}>
                <CreatePost/>

                {listPost.map((post, i)=>{
                   return(
                       <Post key={i} data={post}/>
                   )
                })}

                {/* <Post name="chrisnaf" 
                    imageUrl="https://thumbs.gfycat.com/ImperfectSarcasticAfricanrockpython-size_restricted.gif"
                    content="Salut tout le monde, c'erst en ce jour que je vous annonce que le directeur prend sa retraite et me lègue sa place, merci a vous de me faire confiance et travaillons mains dans la main"
                />
                <Post data/>
                <Post name="chrisnaf"/>
                <Post name="chrisnaf"/>
                <Post name="chrisnaf"/> */}
            </article>
        )
    }
}
