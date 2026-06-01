const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req,res)=>{
   res.send('Hello, How are you doing?');
})

app.post('/', (req,res)=>{
    res.send('POST request received');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





