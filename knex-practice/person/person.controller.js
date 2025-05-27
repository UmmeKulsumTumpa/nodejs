import personService from "./person.service.js";

// class PersonController{
//     async createPerson(req, res){
//         try {
//             const id = await personService.createPerson(req.body);
//             res.status(201).json(id);
//         } catch (error) {
//             console.log(error);
//         }
//     }
// };

const PersonController = async (req, res) => {
        try {
            const id = await personService(req.body);
            res.status(201).json(id);
        } catch (error) {
            console.log(error);
        }
    }

export default PersonController;
