import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ShowPetDetails from "../components/ShowPetDetails"
import MyContext from "../MyContext";
import { Link, navigate } from '@reach/router';

const PetDetails = ({ id }) =>{
    const { pet, setPet, setPets } = useContext(MyContext);
    const [clicked, setClicked] = useState(false);

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

    const handleDelete = id =>{
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res =>{
                axios.get('http://localhost:8000/api/pets')
                    .then(res=>{
                        setPets(res.data.allPets);
                        setPet({
                            petName: "",
                            petType: "",
                            petDescription: "",
                            petSkillOne: "",
                            petSkillTwo: "",
                            petSkillThree: "",
                            petLikes: 0
                        });
                        navigate('/');
                    })
                    .catch(res=>console.log(res));
            })
            .catch(err=>console.log(err));
    }

    const handleLikes = id =>{
        axios.put(`http://localhost:8000/api/pets/${id}`,{
            ...pet,
            petLikes: pet.petLikes += 1
        })
            .then(res =>{
                console.log(res.data);
                setClicked(true);
                axios.get(`http://localhost:8000/api/pets/${id}`)
                    .then(res =>{
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
                    .catch(err =>console.log(err));
            })
            .catch(err => console.log(err));
    }


    return(
        <div className="container">
            <Link to="/" onClick={(e)=>{setPet({
            petName: "",
            petType: "",
            petDescription: "",
            petSkillOne: "",
            petSkillTwo: "",
            petSkillThree: "",
            petLikes: 0
        })}}>Home</Link>
            <ShowPetDetails handleDelete={handleDelete} id = {id} handleLikes ={handleLikes} clicked ={clicked} setClicked ={setClicked} />
        </div>
    );
}

export default PetDetails