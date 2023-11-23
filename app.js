const express = require('express');
const app = express()
const ejs = require('ejs');
app.set(express.static(__dirname + '/public'))
app.set('view engine','ejs')
app.set('views','views') 
app.listen(3000,()=>{
    console.log('server is activated')
})
app.use((req,res,next)=>{
    const date = new Date()
    const day = date.getDay() 
    const hours = date.getHours() 
    if (day >= 1 && day <= 5 && hours >= 9 && hours < 17){
        next()
    }else{
        res.render('closed',{title:'ejs workshop',name:{HOME:'HOME',CONTACT:'CONTACT',SERV:'Our Services'}})
    }
})
app.get('/',(req,res)=>{
    res.render('home',{title:'ejs workshop',name:{HOME:'HOME',CONTACT:'CONTACT',SERV:'Our Services'}})
})
app.get('/contact',(req,res)=>{
    res.render('contact',{title:'ejs workshop',name:{HOME:'HOME',CONTACT:'CONTACT',SERV:'Our Services'}})
})
app.get('/serv',(req,res)=>{
    res.render('ourServices',{title:'ejs workshop',name:{HOME:'HOME',CONTACT:'CONTACT',SERV:'Our Services'}})
})



