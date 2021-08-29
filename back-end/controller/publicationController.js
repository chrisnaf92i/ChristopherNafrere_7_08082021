import mysql from "mysql"

let database = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Pegasus92i*",
    database:"groupomania",
})

export const createPublication = (req, res) => {
    let newPublication = req.body

    console.log(newPublication)

    database.query(`INSERT INTO publication (user_id, date_publication, image_url, content) 

                    VALUES 
    
                    (${newPublication.userId}, "${newPublication.datePublication}", "${newPublication.imageUrl}", "${newPublication.content}")`,
    (err, result, field) => {
        if(err)
        {
            res.status(500).send("can't create publication")
            return console.log(err)
        }
        res.send("création de publication")

        return console.log(result)
    })


}

export const getAllPublication = (req, res) => {
    let querryResult;

    database.query(`SELECT 
    
                        date_publication,
                        image_url,
                        content,
                        commentary_id,
                        last_name,
                        first_name,
                        profile_image_url

                        FROM publication 

                        JOIN user 

                        ON publication.user_id = user.id

                    `, (err, result, field) => {
        if(err)
        {
            return console.log(err)
        }
        querryResult = result

        return res.send(result)
    })


}

export const modifyPublication = (req, res) => {

}

export const deletePublication = (req, res) => {
    database.query(`DELETE FROM publication WHERE id = ${req.params.id}`,  (err, result, field) => {
        if(err)
        {
            return console.log(err)
        }
        return console.log(result)
    })

    res.send("suppression")
}

export const likePublication = (req, res) => {
    
}