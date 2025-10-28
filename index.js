const app = require('express')();
const PORT = 8080;

app.get('/boobies', (req, res) => {
    res.status(200).send({
        message: "Boobies are great!",
        size: "large",
        shape: "round",
        representation: "🍊"
    })
    console.log("Boobies endpoint hit");
});

app.post('/boobies/:id', (req, res) => {

    const { id } = req.params;
    const { logo } = req.body;

    if(!logo) {
        res.status(418).send({message: 'I need a logo to proceed!'})
    }

    res.send({
        message: `Boobies with id ${id} have been updated with logo ${logo}`
    })

});

app.listen(
    PORT, 
    () => console.log(`Server is running on http://localhost:${PORT}`)
);
