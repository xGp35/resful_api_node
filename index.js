const express = require('express');
const app = require('express')();
const PORT = 8080;

app.use(express.json());  // Middleware to parse JSON bodies

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        message: "👕",
        size: "medium",
    })
    console.log("tshirt endpoint hit");
});

app.post('/tshirt/:id', (req, res) => {

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
    () => console.log(`I'm alive !!! http://localhost:${PORT}`)
);
