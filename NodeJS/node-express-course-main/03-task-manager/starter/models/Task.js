const mongoose = require('mongoose');

// Here we are creating the Schema from mongoose to enforce or make sure that all the documents(row) follow the same structure in the mongodb collection(table) as by default mongodb allows dynamic schema (i.e. different document/row can have different fields/columns)
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model('Task', TaskSchema);
