let {people} = require('../data');

// Here in the people controller we are just rearranging the code i.e. taking the second argument of the router from routes/people.js and assigning it to the variable and exporting those functions and using them in the routes/people.js file to organize the code

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
};

const createPerson = (req, res) => {
    const {name} = req.body;

    if(!name) {
        return res.status(400).json({success: false, msg: 'Please provide name value'});
    }

    res.status(201).json({success:true, person:name});
};

const createPersonPostman = (req, res) => {
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg: 'Please provide name value'});
    }

    res.status(201).json({success: true, data: [...people]});
}

const updatePerson = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    
    const person = people.find((person) => person.id === Number(id));

    if(!person) {
        return res.status(404).json({success: false, msg: `no person with id ${id}`});
    }

    const newPeople = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name;
        }
        return person;
    });
    res.status(200).json({success: true, data: newPeople});
};

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));

    if(!person) {
        return res.status(404).json({success: false, msg: `no person with id ${req.params.id}`});
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id));

    return res.status(200).json({success: true, data: newPeople});
};

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
};
