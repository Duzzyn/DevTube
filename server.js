const app = require('./src/app.js');
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})