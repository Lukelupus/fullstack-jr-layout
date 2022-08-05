import express from "express";
import getRegistration from "../controllers/getRegistration.js";
import postRegistration from "../controllers/postRegistration.js";

const router = express.Router()

router.route("/").get(getRegistration).post(postRegistration)

export default router