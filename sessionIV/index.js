const express = require('express');

const app = express();

app.use(express.json);
app.use(express.urlencoded({extended:true}));
app.use(reqLogger)

function reqLogger(req, res, next){
    console.log('${req.method}: ${req.url}');
    next();
}

app.listen(5005,()=>{
    console.log('Server is running at http://localhost:5005');
})