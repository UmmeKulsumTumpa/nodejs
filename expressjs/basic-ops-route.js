import express from 'express';
const router = express.Router();

//
const timeLog = (req, res, next) => {
    console.log(`Time ${Date.now()}`);
    next();
}

// router.use(timeLog);

router.get('/', (req, res) => {
    res.send('First Home page');
});

router.get('/about', (req, res) => {
    res.send('About Birds');
});

router.use(timeLog); // this will not be exceuted, because the middleware is called after the request-response cycle terminates
// so the middleware can't be written here if we want them to be executed

export default router;
