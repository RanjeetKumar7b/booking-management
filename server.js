const express=require("express");
const cors = require('cors');
const app = express();
const dbConfig = require('./db.js');
const roomsRoute=require('./routes/roomsRoute.js');
const usersRoute=require('./routes/usersRoute.js');
app.use(cors({
      origin: 'https://booking-mangement-frontend-e5dogq1ec-ranjeet-kumars-projects.vercel.app/',
      credentials: true,
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    }));
app.use(express.json());
app.use('/api/rooms',roomsRoute)
app.use('/api/users',usersRoute)
const port=process.env.PORT || 4000;
app.listen(port,() => console.log(`server is running on ${port}`));