const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
const cors = require('cors');
app.use(cors());

// This is required for body parser-----------
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello mama, i am from node server');
});

const users = [
    { name: 'Manna', id: 1, job: "Actor", email: 'manna@gmail.com' },
    { name: 'alomgir', id: 2, job: "Actor", email: 'alomgir@gmail.com' },
    { name: 'jahangir', id: 3, job: "Actor", email: 'jahangir@gmail.com' },
    { name: 'anowara', id: 4, job: "Actor", email: 'anowara@gmail.com' },
    { name: 'Manna', id: 5, job: "Actor", email: 'manna@gmail.com' },
    { name: 'alomgir', id: 6, job: "Actor", email: 'alomgir@gmail.com' },
    { name: 'jahangir', id: 7, job: "Actor", email: 'jahangir@gmail.com' },
    { name: 'anowara', id: 8, job: "Actor", email: 'anowara@gmail.com' }
];


// Get all user and search with query parameter------------
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
    } else {
        res.send(users);
    }
});

// Get all users all search with params(id)------------
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id == id);
    res.send(user);
})

// Post method-----------------
app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})


app.listen(port, () => {
    console.log('This app is listening to port on', port);
});