const express = require('express');
const Path = require('path')

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started ${PORT}`));

//body paser
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//Static method
app.use(express.static(Path.join(__dirname, "public")))

app.use('/api/members', require('./routes/Api/Member'))

//Get method
/*
app.get('/',(req,res)=>{
    res.sendFile(Path.join(__dirname,"public","index.html"))
})
*/

//Middelware
/*const log=(req,res,next)=>{
    console.log(`${req.protocol}://${req.get('host')}${req.orginalUrl}`);
    next();
}
app.use(log);*/
