// import express from 'express';
// import PrismaClient from '@prisma/client';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// const prisma = new PrismaClient();

// app.use(express.json());

// // create a user
// app.post('/user', async (req, res) => {
//     try {
//         const {name, age, email, role, emailUpdates} = req.body;

//         const user = await prisma.user.create({
//             data: {
//                 name, 
//                 age,
//                 email,
//                 role,
//                 userPreference: {
//                     create: {
//                         emailUpdates: emailUpdates || false,
//                     }, 
//                 },
                
//             },
//         });

//         res.status(201).json(user);
//     } catch(err){
//         res.status(400).json({error: err.message});
//     }
// });


