    // server.js
    const express = require('express');
    const app = express();
    const port = process.env.port || 3000;

    app.use(express.json());

    app.get('/api/initialData', (req, res) => {
        res.json(
        
        [{
            id: 1,
            item: 'Hello from the backend!',
            completed: true
        }]);

    });

    // Start the server
    app.listen(port, () => {console.log(port);
        console.log('Server is running on port', port);
    });