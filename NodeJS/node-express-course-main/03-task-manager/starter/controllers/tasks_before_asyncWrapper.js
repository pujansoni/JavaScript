const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        // Here we are using the ES6 sytax, so the line below will be equivalent to: res.status(200).json({tasks:tasks});
        res.status(200).json({tasks});
        // We can also put any custom values in the response
        // res.status(200).json({tasks, amount: tasks.length});
        // Sometimes we also use the success: true or status: "success" option in the response
        // res.status(200).json({success: true, data: {tasks, nbHits: tasks.length}});
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

const getTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOne({_id: taskID});

        // Here if the id is not found then as per the mongoose doc we get null in the task so we need to handle that case as well
        if(!task) {
            // Here we need to return the error as if we don't return it will continue executing the function
            return res.status(404).json({msg: `No task with id : ${taskID}`});
        }

        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOneAndDelete({_id: taskID});
        
        if(!task) {
            return res.status(404).json({msg: `No task with id : ${taskID}`});
        }
        
        // Different types of responses for the delete method
        res.status(200).json({task});
        // res.status(200).send();
        // res.status(200).json({task: null, status: 'success'});
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

const updateTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        // Here note that the updated content will be available in the request body
        // Here the third parameter for the findOneAndUpdate method it the options parameter. By default, if we don't use any options property i.e. the 3rd parameter then the task variable will be assigned the original value and not the updated one. Moreover, the validtors provided in the model will be disabled by default so here if the req.body if we have field violating any validations it will still allow us to update the model as we are not using the options parameter
        // So to return the new/updated item to the task we use the option new: true, and to run the validator we use the option runValidators: true
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true,
        });

        if(!task) {
            return res.status(404).json({msg: `No task with id : ${taskID}`});
        }

        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

const editTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        // Here to simulate how the PUT method works in mongoose we use the overwrite: true option which will overwrite the fields not present in the req.body
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true,
            overwrite: true
        });

        if(!task) {
            return res.status(404).json({msg: `No task with id : ${taskID}`});
        }

        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask
}

/*
    PUT v/s PATCH
    PUT is used to completely update a resource and PATCH is used to partially update a resources. In the example given above, we are updating the task name and completed field by using the PATCH method which updates only those two fields. To simulate how the PUT method works we have created a editTask function which includes the overwrite: true option in the findOneAndUpdate() method to simulate how the PUT method works
*/
