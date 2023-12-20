import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAddUserMutation, useFetchSingleUserQuery, useUpdateUserMutation } from '../App/apiUser'


const AddUser = () => {
    const id=useParams()
   const navigate =useNavigate()
    const [datas,setData]=useState({name:"",occupation:"",image:""})
    const [postUser] = useAddUserMutation()
    const [updateUser] = useUpdateUserMutation()
    const {data,isLoading}=useFetchSingleUserQuery(id.id)

    
    useEffect(()=>{
        if(id.id!==undefined){
          (!isLoading)&&setData(
            prev=>{ return {...prev,name:data.name,occupation:data.occupation,image:data.image,id:data.id}}
          ) 
        }
    },[data,id.id,isLoading])
   
    console.log(data);
    console.log(datas);

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(id.id!==undefined){
          updateUser(datas)
          console.log(true);
            // dispatch(updateUser(data))
        }else{
          console.log(false);
          postUser(datas)
            
        }
        console.log(datas);
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
      <input type="text" className="form-control" id="inputEmail3" value={datas.name} name='name' onChange={(e)=>{handleChange(e)}} />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Image Link</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputPassword3" value={datas.image} name='image' onChange={(e)=>{handleChange(e)}} />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Occupation</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputPassword3" value={datas.occupation} name='occupation' onChange={(e)=>{handleChange(e)}} />
    </div>
  </div>
  
  
  <button type="submit" className="btn btn-primary">Save</button>
</form>
  )
}

export default AddUser
