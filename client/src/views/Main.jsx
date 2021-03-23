import {useContext, useEffect} from 'react';
import axios from 'axios';
import MyContext from '../MyContext';
import PetsList from '../components/PetsList';
import {Link} from '@reach/router';
import Dinkleberg from '../assets/dinkleberg.jpeg';

const Main = props =>{
    const { pets, setPets, setTitle} = useContext(MyContext);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
            .then(res => setPets(res.data.allPets))
            .catch(err => console.log(err));
    },[]);

    const sortedPets = pets;
    sortedPets.sort(function(a, b) {
        if(a.petType.toLowerCase() < b.petType.toLowerCase()) return -1;
        if(a.petType.toLowerCase() > b.petType.toLowerCase()) return 1;
        return 0;
    })

    return(
        <div className="container">
            <Link to="/pets/new" onClick={()=>{setTitle("Know a Pet Needing a Home?")}}>Add a Pet to the shelter</Link>
            {
            sortedPets.length === 0 ?
            <div className="d-flex flex-row justify-content-center mt-5">
                <img src={Dinkleberg} alt="No Pets"/>
            </div>
            : 
            <div className="d-flex flex-row justify-content-center mt-5">
                    <PetsList sortedPets ={sortedPets} />
            </div>
            }
        </div>
    );
}

export default Main;