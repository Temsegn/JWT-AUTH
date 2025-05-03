import express from 'express';


const app=express();

const port=process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port,()=>{   
    console.log("Server is running on port 3000");
});