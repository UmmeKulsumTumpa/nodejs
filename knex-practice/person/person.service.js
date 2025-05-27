import personInterafce from "./person.interface.js";

const PersonService  = (personDataObj) => {
        const {firstName, lastName, email} = personDataObj;
        return personInterafce(firstName, lastName, email);
    }

export default PersonService;