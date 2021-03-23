import './App.css';
import MyContext from './MyContext';
import {Router} from '@reach/router';
import {useState} from 'react';
import Main from './views/Main';
import NewPet from './views/NewPet';
import EditPet from './views/EditPet';
import PetDetails from './views/PetDetails';

function App() {
  const [pet, setPet] = useState({
    petName: "",
    petType: "",
    petDescription: "",
    petSkillOne: "",
    petSkillTwo: "",
    petSkillThree: "",
    petLikes: 0
  });
  const [pets, setPets] = useState([]);
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState("");

  return (
    <div className="App">
      <MyContext.Provider value={{ pet, setPet, pets, setPets, errors, setErrors, title, setTitle}}>
        <h1>Pet Shelter</h1>
        <Router>
          <Main path="/" />
          <NewPet path="pets/new" />        
          <EditPet path="pets/:id/edit" />
          <PetDetails path="pets/:id" />
        </Router>
      </MyContext.Provider>
    </div>
  );
}

export default App;
