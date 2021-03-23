const Pet = require('../models/pet.model');

module.exports.index = (req, res) =>{
    Pet.find()
        .then(allPets => res.json({allPets}))
        .catch(err => res.status(404).json({errors: err.errors}));
}

module.exports.findOnePet = (req,res)=>{
    Pet.findOne({ _id: req.params.id })
        .then(pet => res.json(pet))
        .catch(err => res.status(404).json(err));
}


module.exports.createPet =(req, res) =>{
    const { petName, petType, petDescription, petSkillOne, petSkillTwo, petSkillThree, petLikes } = req.body;
    Pet.create({
        petName,
        petType,
        petDescription,
        petSkillOne,
        petSkillTwo,
        petSkillThree,
        petLikes
    })
        .then(newPet => res.json(newPet))
        .catch(err => res.status(404).json({errors: err.errors}));
}


module.exports.updatePet = (req,res) =>{
    Pet.findOneAndUpdate({ _id: req.params.id}, req.body, {runValidators: true, context: 'query', new: true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.status(404).json({errors: err.errors}));
}

module.exports.deletePet = (req, res) =>{
    Pet.deleteOne({ _id: req.params.id })
        .then(confirmDelete => res.redirect(303, '/api/pets'))
        .catch(err => res.status(404).json({errors: err.errors}));
}
