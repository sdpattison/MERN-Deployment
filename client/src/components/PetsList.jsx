import {useContext} from 'react';
import MyContext from '../MyContext';
import {Link} from '@reach/router';

const PetsList = ({ sortedPets }) =>{

    const { setTitle } = useContext(MyContext);

    return (
        <div className="col-6">
            <h1>These Pets Are Looking For A Good Home</h1>
            <table className="table table-hover table-light">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedPets.map((p,i)=>{
                        return(
                        <tr key={i}>
                            <td>{p.petName}</td>
                            <td>{p.petType}</td>
                            <td><Link to={`/pets/${p._id}`}>Details</Link> | <Link to={`pets/${p._id}/edit`} onClick={()=>{setTitle(`Edit ${p.petName}`)}} >Edit</Link></td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default PetsList;