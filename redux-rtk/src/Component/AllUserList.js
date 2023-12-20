import React from "react";
import { useDeleteUserMutation, useFetchUsersQuery } from "../App/apiUser";
import { Link} from 'react-router-dom'

const AllUserList = () => {
  const { data, isLoading } = useFetchUsersQuery();
  const [dataDelete] = useDeleteUserMutation(); 
    
const handleDelete = (id)=>{
    console.log(id);
    dataDelete(id)
}

  
  return (
    <div>
       <Link to="user" className="btn btn-primary">Add New User</Link>
      {isLoading && <h1>Loading</h1>}

      <div className="d-flex flex-wrap">
        {!isLoading &&
          data.map((user) => {
            return (
              <div className="card" style={{ width: "18rem" }} key={user.id}>
                <img src={user.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">{user.occupation}</p>
                  <Link to={`/user/${user.id}`} className="btn btn-primary">
              Edit
            </Link>
            <button className="btn btn-danger ms-2 " onClick={()=>{
                handleDelete(user.id)
            }}>Delete</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AllUserList;
