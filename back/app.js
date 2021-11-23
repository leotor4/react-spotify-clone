const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const mainRoutes = require('./routes/routes')

app.use(express.json(), mainRoutes);



app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
});