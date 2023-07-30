import React from 'react'

const Show = ({user,edit,del}) => {

  return (
    <section>
    
<h1>Users</h1>
  {<table border="1px">
  <thead>
  <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Settings</th>

    </tr>
  </thead>

{user.map((us,idx)=>{
  return(
 <tbody key={us.age}>
 <tr>
    <td>{us.name}</td>
    <td>{us.age}</td>
    <td><button onClick={()=>edit(us,idx)}>Edit</button><button onClick={()=>del(us.age)}>Delete</button></td>

   </tr>
 </tbody>

    
  )
})}
</table>}
   

        

    </section>
  )
}

export default Show