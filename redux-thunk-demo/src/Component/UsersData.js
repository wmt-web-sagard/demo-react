import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUser } from "./features/userApiSlice";
import { Link } from "react-router-dom";

const UsersData = () => {
  const reduxUsers = useSelector((state) => state.user.users);
  const isLoading = useSelector((state) => state.user.isLoading);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  
  function handleDelete(id){
    dispatch(deleteUser(id));
  }  


  useEffect(() => {
      dispatch(fetchUser());
      
  }, [dispatch]);
  
  console.log(reduxUsers, "--", isLoading, "--", error);



  return (
    <div>
    <Link to='/user' className="btn btn-info" >Add User</Link>
      {isLoading && <h3>Loading</h3>}
      <div  className="d-flex flex-wrap">
      {reduxUsers.map((user) => {
      return  <div className="card" style={{width: "18rem"}} key={user.id}>
          <img src={user.image} className="card-img-top" alt="..." />
          <div className="card-body">
          
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">
              {user.occupation}
            </p>
            <Link to={`/user/${user.id}`} className="btn btn-primary">
              Edit
            </Link>
            <button className="btn btn-danger ms-2 " onClick={()=>{
                handleDelete(user.id)
            }}>Delete</button>
          </div>
        </div>;
      })}
      </div>
    </div>
  );
};

export default UsersData;
