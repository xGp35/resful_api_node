const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`Server is running on http://localhost:${PORT}`)
)

