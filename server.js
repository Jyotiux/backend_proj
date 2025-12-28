import express from 'express';
const app = express();

app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.get('/api/jokes', (req, res) => {
    const jokes=[
        {
            id: 1,
            title: 'First Joke',
            content: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 2,
            title: 'Second Joke',
            content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            id: 3,
            title: 'Third Joke',
            content: "Why don't programmers like nature? It has too many bugs."
        },
        {            
            id: 4,
            title: 'Fourth Joke',
            content: "Why do we tell actors to 'break a leg?' Because every play has a cast."
    },
        {
            id: 5,
            title: 'Fifth Joke',
            content: "Why did the math book look sad? Because it had too many problems."
        }

    ];
    res.send(jokes);
});   

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});