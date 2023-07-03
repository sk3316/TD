const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

function myMiddleware(req, res, next) {
    console.log(req.method,req.url);
    next();
}

app.get('/', myMiddleware, (req, res)=> res.send('pong'))

app.post('/user',myMiddleware,(req,res)=>{
    console.log(req.body);
    return res.status(200).json({message: 'it\'s working!'})
})

app.listen(5100, ()=>{
    console.log("server running on port 5100")
})

