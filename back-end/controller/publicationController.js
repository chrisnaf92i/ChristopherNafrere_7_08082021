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

        console.log(result)

        res.send("création de publication")

        return console.log(result)
    })


}

export const getAllPublication = (req, res) => {
    let querryResult;

    database.query(`SELECT * FROM user JOIN publication ON  publication.user_id = user.id

                    `, (err, result, field) => {
        if(err)
        {
            return console.log(err)
        }
        querryResult = result

        console.log(querryResult)

        return res.status(200).send(result)
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