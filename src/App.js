import React, { useState } from 'react'
import Add from './pages/Add';
import Show from './pages/Show';
import About from './pages/About';
import axios from 'axios';


const App = () => {
  const [user, setUser] = useState([]);
  const [edited, setEdited] = useState("");
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");




  const submit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const age = e.target.age.value;
    if (!name && !age) {
      alert("please enter something...");
    }
    else {
      const newUser = { name, age };
      setUser([newUser, ...user]);
      console.log("submitted", newUser);
      e.target.name.value = "";
      e.target.age.value = "";
    }

  }
  const edit = (us,idx) => {
    setToggle(!toggle);
    const edit_user = prompt("edit: ", us.name);
    console.log(edit_user);
    console.log(user);
    setUser(
      user.map((curElem,id) => {
        console.log(curElem,idx,id);
        if (id === idx) {
          return { ...curElem, name: edit_user }
        }
        return curElem;
      })
    )
    console.log("after editing",user);
  }
  const del = (age) => {
    const updatedUser = user.filter(curEle => {
      return curEle.age !== age;
    })
    setUser(updatedUser);
  }
  return (
    <>

      <Add submit={submit} />
      {user.length === 0 ? <h1>no user to show</h1> : <Show user={user} edit={edit} del={del} />}

    </>
  )
}

export default App