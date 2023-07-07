const express = require('express');
const Student = require('./student')

const app = express();

app.use(express.json);
app.use(express.urlencoded({extended:true}));
app.use(reqLogger)

let students= [];

function reqLogger(req, res, next){
    console.log('${req.method}: ${req.url}');
    next();
}
app.post('/api/students',(req,res)=>{
    console.log('here');
    const{name, dept, regno}= req.body;
    const newstudent = new Student(name, dept, regno);
    students.push(newstudent);
    res.status(201).json({message: 'student created'})

})

app.get('/api/students', (req, res) =>{
    req.status(200).json({message:'all students fetched', students});
})

app.get('/api/students/:regno', (req, res) =>{
    const {regno} = req.params;
    const student = students.find((ele)=> ele.regno === regno);
    if (student) {
        res.status(200).json({message: 'student found',student});

    }
    else{
        res.status(404).json({message: 'student does not exist'});
    }
})

app.patch('/api/studnets/:regno/name', (req, res) => {
    const {regno}= req.params;
    const {name} = req.body;
    students = students.map((student)=>{
        if (student.regno === regno) {
            student.name = name;
        }
        return student;
    })
    res.status(200).json({message: 'student updated'});
})

app.delete('/api/students/:regno',(req, res)=>{
    const{regno}= req.params;
    const index = students.findIndex((ele) => ele.regno === regno);
    if (index>-1) {
        
    }
})



app.listen(5005,()=>{
    console.log('Server is running at http://localhost:5005');
})