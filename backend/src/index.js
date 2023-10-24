const app = require('./app');
const PORT = 3000;

// async function init() {
//     await app.listen(3000);
//     console.log('Server started on port 3000');
//     console.log('API doc in /api-docs');

// }

// init();

app.listen(PORT, () => {
    console.log(`
        API listening on PORT ${PORT}
        Docs in /api-docs
    `);
});

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳');
});