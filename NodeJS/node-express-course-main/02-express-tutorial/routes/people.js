const express = require('express');
const router = express.Router();

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people');

// Here we will change the method from app to router. We already have a base route of /api/people in app.js, so we don't need that part here
// router.get('/', getPeople);
// router.post('/', createPerson);
// router.post('/postman', createPersonPostman);
// router.put('/:id', updatePerson);
// router.delete('/:id', deletePerson);

// Alternatively, we can also use the route method from the express.Router() to set up our Routes

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;
