import express from "express"
import router from "./router/routes.js"

const app = express ()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(router)

app.listen( PORT, console.log(`lancement du server sur le port ${PORT}`))

