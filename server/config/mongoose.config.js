const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/exam_db', {
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Established a connection with the database"))
    .catch(err => console.log("Oops, something went wrong with the database", err));