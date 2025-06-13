const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/travel')
    .then(() => console.log('connected to mongoDB'))
    .catch((err) => console.error('not connected to db: ', err))

    