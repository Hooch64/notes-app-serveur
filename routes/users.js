import { Router } from "express";
import { dbQuery } from "../db.js";
const router = Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", async function (req, res) {
  // const username = req.body.username;
  // const password = req.body.password;
  console.log('register new user');
  const { username, password } = req.body;
  const [result] = await dbQuery("INSERT into users (username, password) VALUES (?, ?)", [username, password]);
  res.json({ message: "user created", result })
});

export default router;