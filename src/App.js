import React, { useState } from 'react'
import Add from './pages/Add';
import Show from './pages/Show';
import About from './pages/About';
import axios from 'axios';


const App = () => {
  const [user,setUser]=useState([]);

const submit=(e)=>{
  e.preventDefault();
  const name=e.target.name.value;
  const age=e.target.age.value;

  const newUser={name,age}; 
  setUser([newUser,...user]);
console.log("submitted",newUser);
e.target.name.value="";
e.target.age.value="";
}
const edit=()=>{
  alert("edit........")
}
const del=(age)=>{
 const updatedUser=user.filter(curEle=>{
  return curEle.age!=age;
 })
 setUser(updatedUser);
}
  return (
    <>

<Add submit={submit}/>
{user.length===0?<h1>no user to show</h1>:<Show user={user} edit={edit} del={del}/>}

    </>
  )
}

export default App