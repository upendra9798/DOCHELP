import express from 'express'
import dotenv from "dotenv"
import authRoutes from './routes/auth.routes.js'//Don't forget to use .js //as we are using type module 
// import userRoutes from './routes/user.routes.js'
// import postRoutes from './routes/post.routes.js'
// import notificationRoutes from './routes/notification.routes.js'

import connectMongoDB from './db/connectMongoDB.js'
// import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 6000
// const __dirname = path.resolve();

// console.log(process.env.MONGO_URI);
app.use(express.json({limit:"5mb"}))  //to parse req.body
//limit shouldn't be too high to prevent DOS(img upload)
app.use(express.urlencoded({ extended: true })); // to parse form data

// app.use(cookieParser()); //For protectRoute middelware

app.use("/api/auth",authRoutes)
// app.use("/api/users",userRoutes)
// app.use("/api/posts",postRoutes)
// app.use("/api/notifications",notificationRoutes)


app.listen(PORT,() => { 
    connectMongoDB()  
    console.log(`Server is running on port ${PORT}`);  
})  

 
