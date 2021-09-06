import { Router } from "express";
import { changeBio, deleteUser, getCurrentUser, login, signup } from "../controller/authController.js";
import { createPublication, deleteCommentary, deletePublication, getAllCommentaryFromPublication, getAllPublication, likePublication, writeCommentary } from "../controller/publicationController.js";

const router = Router()

router.get("/", (req, res) => {res.send("Bienvenu sur Groupomania")})

router.post("/test", (req, res) =>
{
    const requete = req.body
    res.json({test:requete})
})


router.get("/api/user/:id", getCurrentUser)
router.post("/api/user/biography/:id", changeBio)
router.delete("/api/user/delete/:id", deleteUser)
router.post("/api/auth/signup", signup)
router.post("/api/auth/login", login)

router.get("/api/post", /* auth, */ getAllPublication)

router.post("/api/post", /* auth, */ createPublication)

router.delete("/api/post/:id", /* auth, */ deletePublication)

router.post("/api/post/like/:id", /* auth, */ likePublication)

router.get("/api/post/commentary/:id", getAllCommentaryFromPublication)
router.post("/api/post/commentary/:id", writeCommentary)

router.delete("/api/post/commentary/:id", deleteCommentary)
export default router