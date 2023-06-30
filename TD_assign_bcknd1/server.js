// const http = require('http');
// const url = require('url');
// const fs = require('fs');

// const server = http.createServer(function requestHandler(req, res) {
//     const URL = url.parse(req.url, true);
//     console.log(req.method);
//     if (URL.pathname==='/') {
//         fs.readFile('hey.html', function (err,data) {
//             res.write(data);
//             res.end()
//         })
        
//     }else if (URL.pathname==='/hello') {
//         fs.readFile('hello.html', function (err,data) {
//             res.write(data);
//             res.end()
//         })
//     }
// })

// server.listen(4000,function(){
//     console.log("server running on port 5000");
// })

///////////////////////////////////////////////////////////////////////////////////////////////

// const express = require('express');
// const app = express();
// app.get('/',(req,res)=>{
//     res.send('hiii')
// })

// app.listen(4200,()=>{
//     console.log('server running');
// })


////////////////////////////////////////////////////////////////////////////////////////////////////////


const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './hey.html'));
});

app.post('/submit', (req, res) => {
    const fullname = req.body.fullname;
    const age = req.body.age;
    res.send(`Submitted Name: ${fullname}<br>
    Submitted Age: ${age}`);
  });

app.listen(port);
console.log('Server started at http://localhost:' + port);

//////////////////////////////////////////////////////////////////////////////////////////


// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// // Configure body-parser middleware
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.send(`
//     <form method="post" action="/submit">
//       <label for="name">Name:</label>
//       <input type="text" id="name" name="name" required><br>

//       <label for="age">Age:</label>
//       <input type="number" id="age" name="age" required><br>

//       <input type="submit" value="Submit">
//     </form>
//   `);
// });

// app.post('/submit', (req, res) => {
//   const name = req.body.name;
//   const age = req.body.age;
//   res.send(`Submitted Name: ${name}<br>Submitted Age: ${age}`);
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });