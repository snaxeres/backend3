import { Router } from "express";
import mocksController from "../controllers/mocks.controller.js";
const router = Router();

//endpoint para obtener mascotas simuladas

router.get("/mockingpets", mocksController.createPets);

router.get("/mockingusers",mocksController.createUsers )


export default router;