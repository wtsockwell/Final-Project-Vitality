import * as express from 'express';
import apiRouter from './routes/index'
import Author from './routes/auth'
import * as path from 'path';
import * as passport from 'passport';
import './middleware/local';
import './middleware/bearer';

const app = express();

app.use(express.json())
app.use(express.static('public'));
app.use(passport.initialize())
app.use('/api', apiRouter);
app.use(Author)
app.use('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.use('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/index.html'))
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
