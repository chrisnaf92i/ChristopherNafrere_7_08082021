import mysql from "mysql"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

let database = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Pegasus92i*",
    database:"groupomania",
})

database.connect()


export const getCurrentUser = (req, res) => {
    const userId = req.params.id
    database.query(`SELECT id, birthday, email, first_name, last_name, profile_image_url, biography FROM user WHERE id = ${userId}`, (err, result, field) => {
        if(err)
        {
            return console.log(err)
        }
        return res.json(result[0])
    })
}

export const deleteUser = (req, res) => {
    database.query(`DELETE FROM user WHERE id = ${req.params.id}`,  (err, result, field) => {
        if(err)
        {
            return console.log(err)
        }

        res.json({message:"utilisateur supprimer", result})
    
        return console.log(result)
    })
}

export const signup = async (req, res) => {
    let account = req.body
    
    console.log(account)

    if(account.role == undefined)
    {
        account.role = 1
    }
    
    console.log(account.role)

    account.password = await bcrypt.hash(account.password, 10)

    console.log(account)
/*     console.log(account) */
    let createUser = database.query(`INSERT INTO user (role, last_name, first_name, email, password, birthday) VALUES ("${account.role}", "${account.lastName}", "${account.firstName}", "${account.email}", "${account.password}", "${account.birthday}")`, (err, result, field) => {
        if(err)
        {
            res.status(400).send("Echec de la création de compte")

            return console.log(err)
        }
        res.status(200).send("réussite de la création de compte")

        return console.log(result)
    })

}

export const login = async (req, res) => {
    let tryUser = req.body
    
    await database.query(`SELECT * FROM user WHERE email = "${tryUser.email}"`, (err, result, field) => {
        if(err)
        {
            console.log("email non trouver")
        }

        let finalResult = result[0]

        console.log(finalResult)

        if(finalResult != undefined)
        {
            console.log("réussite")
            bcrypt.compare(tryUser.password, finalResult.password)
            .then((valid) =>
            {
                if(valid)
                {
                    res.status(200).json({
                        message:"connexion réussi",
                        userId:finalResult.id, 
                        role:finalResult.role,
                        token:jwt.sign(
                            {userId:finalResult.id},
                            "RANDOM_TOKEN_SECRET",
                            {expiresIn:"24h"}
                        )
                    })

                }else
                {
                    res.status(401).json({"error":"mot de passe incorrect"})
                    
                }
            })
            .catch((err) => {
                res.status(500).json({"error":err})

            })
        }else 
        {
            res.status(404).send("echec de connexion, email introuvable")
        }
    })
}

export const changeBio = (req, res) => {
    const userId = req.params.id
    const newBiography = req.body;

    console.log(newBiography)
    
    database.query(`UPDATE user SET biography = "${newBiography.biography}"  WHERE id = ${userId}`, (err, result, field) => {
        if(err)
        {
            return console.log(err)
        }
        console.log(result)
    })

    res.send("Modification de la biography")
}