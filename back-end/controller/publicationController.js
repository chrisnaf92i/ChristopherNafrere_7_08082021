import mysql from "mysql"

let database = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Pegasus92i*",
    database:"groupomania",
})

export const createPublication = (req, res) => {
    let newPublication = req.body

    console.log(req.body)
/*     newPublication.imageUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
 */

    console.log(newPublication)

    database.query(`INSERT INTO publication (user_id, date_publication, image_url, content) 

                    VALUE  
    
                    (${newPublication.userId}, "${newPublication.datePublication}", "${newPublication.imageUrl}", "${newPublication.content}")`,
    (err, result, field) => {
        if(err)
        {
            res.status(500).send("can't create publication")
            return console.log(err)
        }        

        return res.send("création de publication")
    })


}

export const getAllPublication = (req, res) => {
    let querryResult;

    database.query(`SELECT * FROM user JOIN publication ON  publication.user_id = user.id ORDER BY publication.date_publication desc`, (err, result, field) => {
        if(err)
        {
            return console.log(err)
        }
        querryResult = result
        
        console.log(result)

        return res.status(200).send(result)
    })


}

export const deletePublication = (req, res) => {
    database.query(`DELETE FROM publication WHERE id = ${req.params.id}`,  (err, result, field) => {
        if(err)
        {
            return console.log(err)
        }

        console.log(result)

    })

    database.query(`DELETE FROM publication_commentary WHERE publication_id = ${req.params.id}`,  (err, result, field) => {
        if(err)
        {
            return console.log(err)
        }

        console.log(result)    
       
    })

    
    database.query(`DELETE FROM commentary WHERE publication_id = ${req.params.id}`,  (err, result, field) => {
        if(err)
        {
            return console.log(err)
        }

        console.log(result)
       
    })

    res.send("suppression")
}

export const likePublication = (req, res) => {
    const likeData = req.body
    const publication_id = req.params.id
    let publication;

    database.query(`SELECT likes, dislikes FROM publication WHERE id = ${publication_id}`, (err, result, field) => 
    {    
        if(err)
        {
            return console.log(err)
        }

        const finalResult = result[0]

        if(likeData.like == 1)
        {

            const like = finalResult.likes + 1
            console.log(like)
            database.query(`UPDATE publication SET likes = ${like} WHERE id = ${publication_id}`, (err, result2, field) => 
            {    
                if(err)
                {
                    return console.log(err)
                }

                database.query(`INSERT INTO publication_userLiked (publication_id, userLiked_id)
                    VALUE
                    (${publication_id}, ${likeData.user_id}) 
                `, (err, result3, field) => 
                {    
                    if(err)
                    {
                        return console.log(err)
                    }
                    console.log(result3)
                })
                console.log(result2)
            })
        }else if(likeData.like == 0)
        {
            console.log("retirer le like")
        }
    
        return
    })

    console.log(publication)

    


    /* database.query(` UPDATE publication SET likes = 
        `,  (err, result, field) => {
        if(err)
        {
            return console.log(err)
        }
        return res.json({message:"like ajouter", content:likeData})

    }) */
    console.log(likeData)
}

export const getAllCommentaryFromPublication = (req,res) => {
    
    database.query(`SELECT  commentary.id, user.last_name, user.first_name, user.profile_image_url, commentary.user_id, commentary.content, commentary.image_url, commentary.date_publication FROM publication
        
        JOIN publication_commentary
        ON publication_commentary.publication_id = publication.id

        JOIN commentary
        ON publication_commentary.commentary_id = commentary.id
        
        JOIN user
        ON publication.user_id = user.id

        WHERE publication.id = ${req.params.id}
        `,  (err, result, field) => {
        if(err)
        {
            return console.log(err)
        }
        return res.json({message:"réussite", allCommentary:result})
    })
}

export const writeCommentary = async (req, res) => {
    const newRequestCommentary = req.body
    let listCommentary = []
    await database.query(`INSERT INTO commentary (user_id, date_publication, image_url, content, publication_id) 

                    VALUE  
    
                    (${newRequestCommentary.user}, "${newRequestCommentary.date}", "${newRequestCommentary.imageUrl}", "${newRequestCommentary.content}", "${req.params.id}")`,
    (err, result, field) => {
        if(err)
        {
            console.log(err)
        }

    })

    await database.query("SELECT * FROM commentary", (err, result, field) => {
        if(err){
            console.log(err)
        }

        listCommentary = result

        const lastCommentary = listCommentary[listCommentary.length - 1]

        database.query(`INSERT INTO publication_commentary (publication_id, commentary_id) 
        VALUE
        
        ("${req.params.id}", "${lastCommentary.id}")`, (err, result, field) => {
            if(err)
            {
                return console.log(err)
            }

            console.log(result)

        })


        return console.log("test")
    })
}

export const deleteCommentary = (req, res) => {
    database.query(`DELETE FROM commentary WHERE id = ${req.params.id}`,  (err, result, field) => {
        if(err)
        {
            return console.log(err)
        }

        console.log(result)

    })

    database.query(`DELETE FROM publication_commentary WHERE commentary_id = ${req.params.id}`,  (err, result, field) => {
        if(err)
        {
            return console.log(err)
        }

        console.log(result)    
       
    })

    res.send("suppression")
}
