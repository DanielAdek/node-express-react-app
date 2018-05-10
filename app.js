import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routes from './routes/index';

const app = express();
const port = parseInt(process.env.PORT, 10) || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(logger('dev'));
app.use('/', routes);

app.get('*', (req, res) => res.send('<h1> Welcome to Express App!!! </h1>'));

app.listen(port, ()=> console.log(`server started on port ${port}`));
