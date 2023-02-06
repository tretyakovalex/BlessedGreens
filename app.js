const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use(express.static(path.join(__dirname, './BlessedGreens/dist/BlessedGreens')))

app.listen(PORT, () => {
    console.log(`Server listening on localhost://${PORT}`);
});