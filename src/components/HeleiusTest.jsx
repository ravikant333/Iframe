import React, { useState } from 'react'

const HeleiusTest = () => {
 const [data,setData]=useState({twitterId:'',amountBonked:''})

const handleChange=(e)=>{
  const name=e.target.name;
  setData({...data,[name]:e.target.value})
}
const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(data)
}


  return (
    <div style={{marginTop:'4rem',display:'flex',justifyContent:'center'}}>
        <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'2rem',width:'30%'}}>
        <input type='text' value={data.twitterId} name='twitterId' placeholder='twitterId' onChange={handleChange} />
        <input type='number' value={data.amountBonked} name='amountBonked' placeholder='amountBonked'  onChange={handleChange}/>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default HeleiusTest