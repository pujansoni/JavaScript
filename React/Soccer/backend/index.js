import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/soccerRoutes';

const app = express();
const PORT = 4000;

// mongo connection - The mongoose library simplify our code to make connection to the mongo DB database and it also simplifies our queries
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// we use the "body-parser" library to transform our request into something that our database i.e. mongodb can understand
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// CORS setup - Cors is used to handle the Cross Origin Request issues
app.use(cors());

routes(app);

app.get('/', (req, res) => 
    res.send(`Our Soccer application is running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your soccer server is running on port ${PORT}`)
);
