const express=require('express');
const app=express();
//calls the express application to run 

const path=require('path');
const port=process.env.PORT || 3000 
//defines which port the index .html will open from

app.use(express.static('Itron'));
//defines the folder from which additional pages and files needed by index,html will be obtained

app.get('/*',(req,res)=>{
	res.sendFile(path.join(__dirname, 'index.html'));
});
//specifies the openning file

app.listen(port, ()=>{
	console.log('StackOverflow-EDU is running on port'+ port);
});
//names the working port i n the console