import config from './../config/config'
import mongoose from 'mongoose'
import Template from './../template'
mongoose.Promise=global.Promise
mongoose.connect(config.mongoUri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true})
mongoose.connection.on('error',()=>{
  throw new Error(` ${config.mongoUri}`)
})
import app from './express'
app.get('/', (req, res) => {
  res.status(200).send(Template())
 })
app.listen(config.port,(err)=>{
  if(err)
  {
    console.log(err)
  }
  console.info("Server started at port %s",config.port)
})
