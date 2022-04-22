const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hello From smarty personal APP! Wow and nice!");
});

app.use(cors());
app.use(express.json())

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '0178888888' },
    { id: 2, name: 'Shabnur', email: 'Shabnur@gmail.com', phone: '0178888888' },
    { id: 3, name: 'Shuchorita', email: 'Shuchorita@gmail.com', phone: '0178888888' },
    { id: 4, name: 'sabila', email: 'Rojina@gmail.com', phone: '0178888888' },
    { id: 5, name: 'Morzina', email: 'Morzina@gmail.com', phone: '0178888888' },
    { id: 6, name: 'Sraboni', email: 'Sraboni@gmail.com', phone: '0178888888' },
    { id: 7, name: 'Josim', email: 'Josim@gmail.com', phone: '0178888888' },
]

app.get('/users', (req, res) => {
    console.log('query', req.query);

    // Filter by query parameter or search query.
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('this is request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'Orange']);
})

app.get('/fruits/mango/fazli', (req, res) => {
    res.send('sour sour fazlifalvour');
})

app.listen(port, () => {
    console.log("Server is running on port:", port);
});