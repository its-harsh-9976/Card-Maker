import React, { useState } from 'react'
import Cards from './Components/Cards'
import Form from './Components/Form'
function App() {
  const [users,setuser]=useState([]);

  const handelFormSubmitData= (data)=>{
    setuser([...users,data])
  }

  const handleRemove=(id)=>{
      setuser(()=>users.filter((item,index)=>index!=id))
  }

  return (
    <div className='w-full h-screen bg-zinc-300 flex items-center justify-center'>
      <div className=' container mx-auto'>
          <Cards handleRemove={handleRemove} users={users}/>
          <Form handelFormSubmitData={handelFormSubmitData}/>
      </div>
    </div>
  )
}

export default App 

