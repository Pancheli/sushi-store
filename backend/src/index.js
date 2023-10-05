const app = require('./app');

async function init() {
    await app.listen(3000);
    console.log('Server started on port 3000');
    console.log('API doc in /api-docs');

}

init();


