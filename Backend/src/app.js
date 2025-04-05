import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";



const app = express();


app.use(cors({
  // origin: process.env.CORS_ORIGIN,
    origin :"http://localhost:5173", // again crucial part
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE' , 'PATCH'],
    allowedHeaders: [
      'Content-Type', 
      'Authorization', 
      'X-Requested-With'
    ]
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// routes import

import userRouter from './routes/user.routes.js'
import commentRouter from "./routes/comment.routes.js"
// import healthcheckRouter from "./routes/healthcheck.routes.js"
// import tweetRouter from "./routes/tweet.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import videoRouter from "./routes/video.routes.js"
import likeRouter from "./routes/like.routes.js"
// import playlistRouter from "./routes/playlist.routes.js"
import dashboardRouter from "./routes/dashboard.routes.js"

//routes declaration

app.use("/api/v1/users", userRouter)
app.use("/api/v1/comments" , commentRouter )
app.use("/api/v1/videos" , videoRouter)
app.use("/api/v1/dashboard" , dashboardRouter)
app.use("/api/v1/subscription" , subscriptionRouter )
app.use("/api/v1/like" , likeRouter )

// http://localhost:8000/api/v1/users/register

export {app};