const express=require('express')
const app=express()
const http=require('http').createServer(app)

const PORT=process.env.PORT||3000

http.listen(PORT,()=>{
    console.log(`Backend server is running on ${PORT}`);
})

app.use(express.static(__dirname+'/client'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/client/index.html')
})