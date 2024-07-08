const express = require('express')
const mongoose = require('mongoose')
const {ApolloServer,gql} = require('apollo-server-express')
const typeDefs = require('./Schema')
const resolvers = require('./resolvers')
const userApiFromRouter = require('./router/userRouter')
const app = express()
const port = 3001;
const cors=require('cors');
const url='mongodb+srv://kolabhavaniprasad:FQw24kp3D748MWhTn@cluster.zis7u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster'
app.use(express.json())
app.use(cors());
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('MongoDB connected')})
.catch((err)=>{console.log(err)})

//start my apollo express server
const server = new ApolloServer({typeDefs,resolvers})
app.use('/users',userApiFromRouter);
async function StartServer(){
    await server.start();
    server.applyMiddleware({app});
    app.listen(port,()=>{
        console.log(`Server live at ${port}`)})
}
function TESTING(){
    return 0;
}
TESTING();
StartServer();