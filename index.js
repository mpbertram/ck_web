const express = require('express')
const PORT = process.env.PORT || 5000

express()
    .use(express.static('app'))  
    .use('/deps', express.static('deps'))
    .listen(PORT, () => console.log(`Listening on port ${PORT}`))
