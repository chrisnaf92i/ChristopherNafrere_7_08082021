import express from "express"
import router from "./router/routes.js"
import path, { dirname } from "path"


const app = express ()

const __dirname = path.resolve()

const PORT = process.env.PORT || 5000

/* 
app.use("/images", express.static(path.join(__dirname, "images"))) */


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json())
app.use(router)


app.listen( PORT, () => console.log(`lancement du server sur le port ${PORT}`))

