//crear mascotas
import MockingService from "../services/mocking.js";

const createPets = async (req,res)=>{
    const pets = await MockingService.createPetsMocking(50);
    res.send({status:"Exitoso", payload: pets})
}

const createUsers = async (req,res)=>{
    const users = await MockingService.createUsersMocking(10);
    res.send({status: "exitoso", payload: users})
}

export default {
    createPets,
    createUsers
}