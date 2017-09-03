const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');
var {ObjectID} = require('mongodb');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) =>{
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Invalid id');
    }
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send('Todo not found');
        }
        res.send({todo});
    }).catch((e) => {
      res.status(400).send('Error');  
    });
});

app.delete('/todos/:id', (req, res) => {
   var id = req.params.id;
    
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Invalid id');
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send('Todo not found');
        }
        res.status(200).send({todo});
    }).catch((e) => {
      res.status(400).send('Error');  
    }); 
});

app.listen(port, () => {
    console.log(`Started succesfully on port ${port}`);
});

module.exports = {
    app
};