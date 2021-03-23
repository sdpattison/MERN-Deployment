const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, "Oh ey, oh ey, what kinda pet has no name??"],
        minLength: [3, "Oh ey, oh ey, what kinda name has less than 3 characters, what gives?"],
        unique: true
    },
    petType: {
        type: String,
        required: [true, "Oh ey, oh ey, what kinda pet has no type??"],
        minLength: [3, "Oh ey, oh ey, what kinda pet type has less than 3 characters, what gives?" ]
    },
    petDescription: {
        type: String,
        required: [true, "Oh ey, oh ey, what kinda pet has no description??"],
        minLength: [3, "Oh ey, oh ey what kinda pet description has less than 3 characters, what gives?"]
    },
    petSkillOne: {
        type: String,
        required: false
    },
    petSkillTwo: {
        type: String,
        required: false
    },
    petSkillThree: {
        type: String,
        required: false
    },
    petLikes : {
        type: Number,
        required: false
    }
}, {timestamps: true});

PetSchema.plugin(uniqueValidator);

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
