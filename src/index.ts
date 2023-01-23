import express, {Request, Response} from 'express';
const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send({ message: 'Hello WWW!' });
});

app.listen(5000, () => {
    console.log('Application listening on port 5000!');
});