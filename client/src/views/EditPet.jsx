import axios from "axios";
import { useContext, useEffect } from "react";
import MyContext from "../MyContext";
import PetForm from "../components/PetForm";
import {Link, navigate} from '@reach/router';

const EditPet = ({ id }) =>{
    const { pet, setPet, setErrors } = useContext(MyContext);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res=>{
                console.log(res.data);
                setPet({
                    petName: res.data.petName,
                    petType: res.data.petType,
                    petDescription: res.data.petDescription,
                    petSkillOne: res.data.petSkillOne,
                    petSkillTwo: res.data.petSkillTwo,
                    petSkillThree: res.data.petSkillThree,
                    petLikes: res.data.petLikes
                })
            })
            .catch(err=>console.log(err));
    },[]);

    const handleSubmit = e =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${id}`,{
            petName: pet.petName,
            petType: pet.petType,
            petDescription: pet.petDescription,
            petSkillOne: pet.petSkillOne,
            petSkillTwo: pet.petSkillTwo,
            petSkillThree: pet.petSkillThree,
            petLikes: pet.petLikes
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

    return (
        <div className="container">
            <Link to="/">Home</Link>
            <PetForm handleSubmit={handleSubmit} />
        </div>
    );
}

export default EditPet;