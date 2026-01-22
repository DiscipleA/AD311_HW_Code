const express = require("express"); //loads the Express library (CommonJS style, default in Node unless you enable ES modules).

const app = express(); // creates an Express application instance

//Step 3: Routing
app.get('/', (req, res) => {
  res.send('Hello World!\n')
})

app.get('/about', (req, res) => {
  res.send('About page\n')
})

// Step 4: Conditional Routing
app.get('/foo', (req, res, next) => {
    const choice = Math.random() < 0.5;
    
    if (choice) {
        res.send('ometimes this\n');
    } else {
        next(); //pass control to the next /foo handler
    }
});

app.get('/foo', (req, res) => {
    res.send('and sometimes that\n');
});

//Step5: Regex-like route pattern
app.get(/^\/user(name)?$/, (req, res) => {
    res.send('user/username route matched!\n');
});

//Step 6: Dynamic Route Handling
app.get("/user/:username", (req, res) => {
    const username = req.params.username;
    res.send('Hello  ' + username + '!');
});

//Step 7: Query String Handling
app.get('/get', (req, res) => {
    console.log('Query request: ', req.query);
    //res.send('Check console log for requested query!');
    res.json(req.query);
});


//Step 8: Error Handling
app.use((req, res) => {
    res.status(404).send('404 - Not Found!');
});

/**
* Step 2: Server configuratiion
* In many cloud setups, he platform often assigns a port and  
* exposes it through "process.env.port".
*/
const port = process.env.port || 3000 //'process.env.port' checks if an environment variable named port exists.

//Step 9: Server Activation & 'nmp start' command coded in package.json scripts
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})


