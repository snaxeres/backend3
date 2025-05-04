import { faker } from "@faker-js/faker";


import { createHash} from "../utils/index.js";
class MockingService {
    static async createPetsMocking(cantidad) {
        const pets = [];
        for (let i = 0; i < cantidad; i++) {
            pets.push({
                name: faker.animal.dog(),
                specie: faker.animal.type(),
                adopted: false,
                birthDate: faker.date.past(),
                image: "https://via.placeholder.com/150"
            })
        }
        return pets;
    }

    static async createUsersMocking(count){
 
            const users = [];
          
            const password = await createHash('coder123', 10);
          
            for (let i = 0; i < count; i++) {
              users.push({
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                password,
                role: faker.helpers.arrayElement(['user', 'admin']),
                pets: []
              });
            }
          
            return users;
    }
}

export default MockingService