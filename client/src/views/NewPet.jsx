import {Link, navigate} from '@reach/router';
import { useContext, useState } from 'react';
import PetForm from '../components/PetForm';
import MyContext from '../MyContext';
import axios from 'axios';

const NewPet = props =>{
    const { title, setTitle, pet, setPet, errors, setErrors } = useContext(MyContext);

    const handleSubmit = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets/create',{
            petName: pet.petName,
            petType: pet.petType,
            petDescription: pet.petDescription,
            petSkillOne: pet.petSkillOne,
            petSkillTwo: pet.petSkillTwo,
            petSkillThree: pet.petSkillThree,
            petLikes: 0
        })
            .then(res=>{
                console.log(res);
                setPet({
                    petName: "",
                    petType: "",
                    petDescription: "",
                    petSkillOne: "",
                    petSkillTwo: "",
                    petSkillThree: "",
                    petLikes: 0
                });
                setErrors([]);
                navigate('/');
            })
            .catch(err=>{
                console.log(err.response.data.errors);
                const errorResponse = err.response.data.errors; 
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    }
    return(
        <div className="d-flex flex-row justify-content-center">
            <div className="col-6">
                <Link to="/" onClick={()=>{setTitle("")}}>Home</Link> 
                <PetForm handleSubmit={handleSubmit} />
            </div>
        </div>
        
    );
}

export default NewPet; 