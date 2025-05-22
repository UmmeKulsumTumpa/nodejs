import express from 'express';

const app = express();
const PORT = 3000;

/**
 * Purpose of app.use(): To apply middleware functions to all incoming requests or to specific paths, regardless of the HTTP method.
 * Purpose of app.METHOD(): To define route handlers for specific HTTP methods (e.g., GET, POST) and paths.
 */


// app.use('/user/:id', (req, res, next) => {
//     console.log('request type: ', req.method); 
//     next();
// });
// // this function is executed for the any type of HTTP request on the /user/:id path
// // so using the app.use, we can use any method we want,
// // like i can use the http://loaclhost:3000/user/1, i can use get, post, put anything i want

// app.get('/user/:id', (req, res, next) => {
//     res.send('User');
// });

// // loading multiple/a series of middleware functions
// app.use('/user/:id', (req, res, next) => {
//     console.log('Request URL: ', req.originalUrl);
//     next();
// }, (req, res, next) => {
//     console.log('Request Type: ', req.method);
//     next();
// }
// );

// // handler for the /user/:id path, which prints the user ID
// app.get('/user/:id', (req, res, next) => {
//     res.send(req.params.id);
// });

// we can also manipulate wheather or not to jump to the next middleware
app.get('/user/:id', (req, res, next) => {
    console.log('Request URL: ', req.originalUrl);
    if(req.params.id === '0') next('route'); // if the user id is 0, skip the next route
    else next(); // otherwise pass to the next middleware function in the stack
}, (req, res, next) => {
    console.log('a regular msg from the next middleware');
    next();
}
);

// handler for the /user/:id path, which sends a special response
app.get('/user/:id', (req, res, next) => {
    res.send('hey, you are special');
});

app.listen(PORT, ()=>{
    console.log(`server is running successfully on ${PORT}`);
});


/**
 *************** Note *****************

 * Use next('route') within middleware functions defined using app.METHOD() or router.METHOD() to effectively skip to the next route handler. Using next('route') within app.use() middleware does not have the intended effect and will not skip subsequent middleware functions
 * 
 * 
 */