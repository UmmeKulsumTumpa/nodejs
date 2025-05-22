// works same as the application level middleware
// except it is bound to the instance of express.Router()

import express from 'express';

const app = express();
const router = express.Router();

// a middleware function with no mount path, this code is executed for every request to the router

router.use((req, res, next) => {
    console.log(`Log Time: ${Date.now()}`);
    next();
});

// a middleware sub-track show the request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', (req, res, next) => {
    console.log(`requested url: ${req.originalUrl}`);
    next();
}, (req, res, next) => {
    console.log(`requested type: ${req.method}`);
    next();
});

router.get('/user/:id', (req, res, next) => {
    if(req.params.id === '0') next('route');
    else next();
}, (req, res, next) => {
    res.send('regular');
    // next()
});

router.get('/user/:id', (req, res, next) => {
    console.log(req.params.id);
    res.send('special');
})

// mount the oruter on the app
app.use('/', router);

app.listen(4000, ()=>{
    console.log(`server is running on port 4000`);
});
