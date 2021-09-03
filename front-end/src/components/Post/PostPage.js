import CreatePost from "./createPost/CreatePost"
/* import listPost from './listPost' */
import Post from './Post/Post'
import React, {  useState, useEffect} from 'react'

const PostPage = () => {
    const [posts, setPosts] = useState([])

    const fetchData = async () => {
        const data = await window.fetch("/api/post")
        /* console.log(data) */
        const allPost = await data.json()
        setPosts(allPost)
        console.log(allPost)
    }

    console.log(posts)


    useEffect(() => {

        fetchData()
    }, [])
    
    return (
        <article style={{width:"100%"}}>
            <CreatePost/>

            { posts.map( 
                post => 
                    { 
                        return (
                                <Post key={post.id} data={post}/>   
                        )
                    } 
                ) 
            }

        </article>
    )

}

export default PostPage