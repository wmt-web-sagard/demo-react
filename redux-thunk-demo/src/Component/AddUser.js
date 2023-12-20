import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addUser, updateUser } from './features/userApiSlice'


const AddUser = () => {
    const id=useParams()
    const reduxUsers = useSelector((state) => state.user.users);
    
    const dispatch = useDispatch();
    const navigate  =useNavigate()
    const [data,setData]=useState({})


    console.log(id.id);
    useEffect(()=>{
        if(id.id!==undefined){
            var dat = reduxUsers.filter((item, index) => id.id == item.id)
            setData(prev=> dat[0])
            console.log(true);
        }
    },[id])
   
    console.log(data);

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(id!==undefined){
            dispatch(updateUser(data))
        }else{

            dispatch(addUser(data))
        }
        console.log(data);
        navigate('/')

    }
    const handleChange = (e)=>{
        const {name,value} =e.target
        setData((prev)=>{return {...prev,[name]:value}})
    }


  return (
    <form className=' container mt-5' onSubmit={handleSubmit}>
    
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputEmail3" value={data.name} name='name' onChange={(e)=>{handleChange(e)}} />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Image Link</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputPassword3" value={data.image} name='image' onChange={(e)=>{handleChange(e)}} />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Occupation</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputPassword3" value={data.occupation} name='occupation' onChange={(e)=>{handleChange(e)}} />
    </div>
  </div>
  
  
  <button type="submit" className="btn btn-primary">Save</button>
</form>
  )
}

export default AddUser
