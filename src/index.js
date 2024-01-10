import express from 'express'
import './config/enviroment.js'
import { connection } from './config/db.js'

const app = express()


app.get('/',async (req,res)=>{
    const [data,fields]=await connection.execute('select * from BOOKS')
    
    res.send(data)
})

app.use((req,res)=>{
    res.status(404).end('ERORR 404')
})

app.listen(process.env.PORT,()=>console.log(`server on... http://localhost:${process.env.PORT}`))