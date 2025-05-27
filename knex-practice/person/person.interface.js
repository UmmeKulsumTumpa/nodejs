import db from '../db/db.js';

const PersonInterface = async (firstName, lastName, email) => {
        const [id] = await db('person')
            .insert({
                email,
                first_name: firstName,
                last_name: lastName,
            })
            .returning('id');
        
        return id;
    }

export default PersonInterface;