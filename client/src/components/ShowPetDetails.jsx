import { useContext, useState } from "react";
import MyContext from "../MyContext";

const ShowPetDetails = ({ handleDelete, id, handleLikes, clicked, setClicked }) =>{
    const { pet } = useContext(MyContext);

    return(
        <div className="container">
            <div className="d-flex flex-row justify-content-right mt-5">
                <div className="col-6">
                    <h2>Details About: {pet.petName}</h2>
                    <h3>Pet Type: {pet.petType}</h3>
                    <h3>Pet Description: {pet.petDescription}</h3>
                    <h3>Pet Skills: {pet.petSkillOne}{pet.petSkillTwo ? "," : null } {pet.petSkillTwo}{pet.petSkillThree ? "," : null } {pet.petSkillThree}</h3>
                </div>
                <div className="col-6">
                    <button className="btn btn-success" onClick={(e)=>{handleDelete(id)}}>Adopt {pet.petName}</button>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-center">
                <div className="col-6">
                    {clicked ? <button className="btn btn-success mt-5 disabled" >You Liked {pet.petName}</button> : <button className="btn btn-success mt-5" onClick={()=>{handleLikes(id)}}>Like {pet.petName}</button> }
                    <p>{pet.petLikes ? pet.petLikes : 0} Likes for {pet.petName}</p>
                </div>
            </div>
        </div>
    );
}

export default ShowPetDetails;