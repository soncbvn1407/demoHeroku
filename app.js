const express = require('express')
const app = express()

app.set('view engine','hbs')

function formatDate(date){
    return new Date(date).toLocaleString("vi-VN")
}

app.get('/',(req,res)=>{
    var td = new Date().toISOString()
    res.render('index',{now:formatDate(td)})
})

const PORT = process.env.PORT || 5000

app.listen(PORT)
console.log('Server is running: ' + PORT)