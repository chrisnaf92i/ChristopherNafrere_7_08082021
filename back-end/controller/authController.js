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


export const getModoAccount = (req, res) => {

    database.query(`SELECT birthday, email, first_name, last_name, profile_image_url FROM user WHERE role = 0`, (err, result, field) => {
        if(err)
        {
            return console.log(err)
        }
        return res.json(result[0])
    })
}

export const signup = async (req, res) => {
    let account = req.body

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

export const login = (req, res) => {

    let allUser = database.query(`SELECT * FROM user WHERE email = "${req.body.email}"`, (err, result, field) => {
        if(err)
        {
            res.status(404).send("email non trouver")
            return console.log(err)
        }

        let finalResult = result[0]

        console.log(`mot de passe `)

        bcrypt.compare(req.body.password, finalResult.password)
            .then((valid) =>
            {
                if(valid)
                {
                    res.status(200).json({
                        message:"connexion réussi",
                        userId:finalResult.id, 
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

        return console.log(result[0])
    })
}