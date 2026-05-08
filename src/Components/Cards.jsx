import React from 'react'
import Card from './Card'
function Cards({users,handleRemove}) {
  return (
    <div className='w-full h-75 max-h-75 p-4 overflow-auto flex justify-center gap-4 flex-wrap '>
       {users.map((item,index)=>{
        return <Card handleRemove={handleRemove} id={index} key={index} user={item}/>
       })}
    </div>
     
  )
}

export default Cards