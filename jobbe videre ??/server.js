const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());  

app.get('/', async (req, res) => {
    try {
        const response  = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'Dad joke API'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        res.json({ joke: data.joke });
    } catch (error) {
        console.error('Error fetching joke:', error);
        res.status(500).json({ error: 'Failed to fetch joke' });
    }
});

app.listen(port, () => { 
    console.log(`Server running !!`);
  });
