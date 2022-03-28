const express = require('express');
const vue = require('vue');

const PORT = 5000;

const app = express();

app.set('view engine', 'vue');


app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
})