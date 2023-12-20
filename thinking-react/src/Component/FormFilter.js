import React from 'react'

const FormFilter = ({search,handleChange,handleCheck,isStock}) => {
  return (
    <div>
      <input type='text' value={search} onChange={(e)=>{handleChange(e)}} />
    <br/>
    <input type='checkbox' id='stock' value={isStock} onChange={(e)=>{handleCheck(e)}} /> <label htmlFor='stock'>See Only in Stock</label>

    </div>
  )
}

export default FormFilter
