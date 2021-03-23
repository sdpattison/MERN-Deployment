import e from "cors";
import { useContext } from "react";
import MyContext from "../MyContext";

const PetForm = ({ handleSubmit }) =>{
    const { title, pet, setPet, errors } = useContext(MyContext);
    
    return(
        <div className="container">
            <h1>{title}</h1>
            <form className="form-control" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="petName">Name</label>
                        <input type="text" name="petName" className="form-control" onChange={(e)=>{setPet({...pet, petName: e.target.value})}} value={pet.petName}/> 
                        <label htmlFor="petType">Type</label>
                        <input type="text" name="petType" className="form-control" onChange={(e)=>{setPet({...pet, petType: e.target.value})}} value={pet.petType} />
                        <label htmlFor="petDescription">Description</label>
                        <input type="text" name="petDescription" className="form-control" onChange={(e)=>{setPet({...pet, petDescription: e.target.value})}} value={pet.petDescription}/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="petSkillOne">Pet Skill One</label>
                        <input type="text" name="petSkillOne" className="form-control" onChange={(e)=>{setPet({...pet, petSkillOne: e.target.value})}} value={pet.petSkillOne}/>
                        <label htmlFor="petSkillTwo">Pet Skill Two</label>
                        <input type="text" name="petSkillTwo" className="form-control" onChange={(e)=>{setPet({...pet, petSkillTwo: e.target.value})}} value={pet.petSkillTwo}/>
                        <label htmlFor="petSkillThree">Pet Skill Three</label>
                        <input type="text" name="petSkillThree" className="form-control" onChange={(e)=>{setPet({...pet, petSkillThree: e.target.value})}} value={pet.petSkillThree}/>
                    </div>
                </div>
                <p className="text-danger">{errors[0]}</p>
                <p className="text-danger">{errors[1]}</p>
                <p className="text-danger">{errors[2]}</p>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    );
}

export default PetForm;