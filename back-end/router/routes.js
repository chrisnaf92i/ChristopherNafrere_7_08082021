import { Router } from "express";
import { getModoAccount, login, signup } from "../controller/authController.js";
import { createPublication, deletePublication, getAllPublication, likePublication, modifyPublication } from "../controller/publicationController.js";
import auth from "../midleware/auth.js";

const router = Router()

router.get("/", (req, res) => {res.send("Bienvenu sur Groupomania")})

router.get("/api/auth/user", getModoAccount)
router.post("/api/auth/signup", signup)
router.post("/api/auth/login", login)

router.get("/api/post", /* auth, */ getAllPublication)

router.post("/api/post", /* auth, */ createPublication)

router.put("/api/post/:id", /* auth, */ modifyPublication)
router.delete("/api/post/:id", /* auth, */ deletePublication)

router.post("/api/post/:id/like", /* auth, */ likePublication)

export default router