"use client"

import React, {useState} from 'react'


function App() {
  const [tittle , settittle ] = useState("");
  const [desc ,setdesc ] = useState("")
  const [main, setmain] = useState([])



  const submitHandler = (e) =>{
    e.preventDefault()
    console.log(tittle)
    console.log(desc)
    settittle("")
    setdesc("")
    setmain([...main,{tittle,desc}])
  }
  const deleteHandler  = (i)=>{
let copyTask = [...main]
copyTask.splice(i,1)
setmain(copyTask)
  } 
  let renderTask = <h2>No task Available</h2> 
  if(main.length > 0){
    renderTask =   main.map((t,i) =>{
      return (
        <li key={i} className='flex items-center justify-between'>
          <div className='flex items-center justify-between mb-5 w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.tittle}</h5>
        <h6 className='text-xl font-semibold'>{t.desc}</h6>
      </div>
      <button onClick={()=>{
        deleteHandler(i)
      } } 
      className='bg-red-400 text-white px-4 py-2 rounded font-blod hover:bg-red-600'>Delete</button>
        </li>
      )
    })
  }
  return (
  <>
  <h1 className='text-white bg-black p-5 text-5xl text-center font-bold '>
    My todo list 
  </h1>
  <form onSubmit={submitHandler}>
    <input type="text" className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2' placeholder='Enter task here '
    value={tittle}  
    onChange={(e)=>{
     settittle(e.target.value)
    }}/>

    <input type="text" className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2' placeholder='Enter description here  ' 
    value={desc }
    onChange={(e)=>{
      setdesc(e.target.value) 
    }} />
    <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded'>Add task </button>
    </form> 
      <hr />
      <div className='p-8 bg-slate-200 '> 
      <ul>
        {renderTask}
      </ul>
      </div>
  </>
  )
}

export default App