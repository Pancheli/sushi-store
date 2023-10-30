const app = require('./app');
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`
        API listening on PORT ${PORT}
        Docs in /api-docs
    `);
});

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳');
});