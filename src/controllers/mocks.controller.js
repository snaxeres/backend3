//crear mascotas
import MockingService from "../services/mocking.js";

const createPets = async (req,res)=>{
    const pets = await MockingService.createPetsMocking(50);
    res.send({status:"Exitoso", payload: pets})
}

const createUsers = async (req,res)=>{
    const users = await MockingService.createUsersMocking(50);
    res.send({status: "exitoso", payload: users})
}


const generateData = async (req,res)=>{
    const dataGenerated = await MockingService.generateData();
    res.send({status: "exitoso", payload: dataGenerated})
}
export default {
    createPets,
    createUsers,
    generateData
}