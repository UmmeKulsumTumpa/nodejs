import express from 'express';
const router = express.Router();

//
const timeLog = (req, res, next) => {
    console.log(`Time ${Date.now()}`);
    next();
}

router.use(timeLog);

router.get('/', (req, res) => {
    res.send('First Home page');
});

router.get('/about', (req, res) => {
    res.send('About Birds');
});

export default router;
