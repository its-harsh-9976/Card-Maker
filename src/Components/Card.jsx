import React from "react";

function Card({user,handleRemove,id}) {
     return(
      <div  className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-3 ">
      <div className="image w-20 h-20 rounded-full bg-green-200  overflow-hidden ">
        <img className="w-full h-full object-cover " src={user.image} alt="" />
      </div>
      <h1 className="text-xl font-bold  text-center leading-none">{user.name}</h1>
      <h4 className="opacity-60 text-xs font-semibold">{user.email}</h4>
      <p className="text-center text-xs font-semibold leading-4 tracking-tight">{user.para}</p>
      <button onClick={()=>handleRemove(id)} className="px-3 py-1 bg-red-600 text-xs rounded-md text-white mt-4">Remove it</button>
    </div>
   
  );
}

export default Card;
//24.36
