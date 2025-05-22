import express from "express";
import router from "./basic-ops-route.js";

const app = express();
const PORT = 3000;

app.use('/my-route', router);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/', (req, res) => {
    res.send('Got a post request');
});

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});
