import React from "react";
import { useForm } from "react-hook-form";

function Form({handelFormSubmitData}) {
  const{register,handleSubmit,reset}=useForm()
  const handelFormSUBMIT=(data)=>{
    handelFormSubmitData(data);
    reset();
  }
  return (
  <div className='bg-pink-200 mt-10 flex  justify-center'>
    <form className='rounded-lg flex gap-4' onSubmit={handleSubmit(handelFormSUBMIT)}>
      <input {...register('name')} className="rounded-md px-2 py-1 text-base font-semibold border border-zinc-400 bg-white focus:outline-none" type="text" placeholder="Name" />
      <input {...register('email')} className="rounded-md px-2 py-1 text-base font-semibold border border-zinc-400 bg-white focus:outline-none" type="text" placeholder="email" />
      <input {...register('image')} className="rounded-md px-2 py-1 text-base font-semibold border border-zinc-400 bg-white focus:outline-none" type="text" placeholder="image url" />
      <input {...register('para')} className="rounded-md px-2 py-1 text-base font-semibold border border-zinc-400 bg-white focus:outline-none" type="text" placeholder="About" />
      <input  className="rounded-md px-5 py-1 bg-blue-400 text-white font-semibold" type="submit" />
    </form>
    </div>
  )
}

export default Form;

