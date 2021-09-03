import { Router } from "express";
import { changeBio, getCurrentUser, login, signup } from "../controller/authController.js";
import { createPublication, deletePublication, getAllPublication, likePublication, modifyPublication } from "../controller/publicationController.js";

const router = Router()

router.get("/", (req, res) => {res.send("Bienvenu sur Groupomania")})

router.post("/test", (req, res) =>
{
    const requete = req.body
    res.json({test:requete})
})

router.get("/api/user/:id", getCurrentUser)
router.post("/api/auth/signup", signup)
router.post("/api/auth/login", login)
router.post("/api/user/biography/:id", changeBio)

router.get("/api/post", /* auth, */ getAllPublication)

router.post("/api/post", /* auth, */ createPublication)

router.put("/api/post/:id", /* auth, */ modifyPublication)
router.delete("/api/post/:id", /* auth, */ deletePublication)

router.post("/api/post/:id/like", /* auth, */ likePublication)

export default router