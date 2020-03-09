const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.json());

app.get('/dummyRandomImage', (_, res) => {
    let random = Math.round(Math.random() * 5);
    random = random === 0 ? random + 1 : (random > 5 ? random - 1 : random);
    fs.readFile(path.join(__dirname, `/assets/${random}.jpg`), 'base64',
        (_, base64Image) => {
            const dataUrl = `data:image/jpeg;base64, ${base64Image}`;
            return res.json({ url: dataUrl });
        });
});

app.listen('3300', () => console.log('started ok at localhost:3300'));