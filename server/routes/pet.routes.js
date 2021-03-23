const PetController = require('../controllers/pet.controller');

module.exports = app =>{
    app.get('/api/pets', PetController.index);
    app.get('/api/pets/:id', PetController.findOnePet);
    app.post('/api/pets/create', PetController.createPet);
    app.put('/api/pets/:id', PetController.updatePet );
    app.delete('/api/pets/:id', PetController.deletePet);
}