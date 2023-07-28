import React from 'react'

const Show = ({user,edit,del}) => {

  return (
    <section>
    
<h1>Users</h1>
  {<table border="1px">
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Settings</th>

    </tr>
{user.map(us=>{
  return(
 
   <tr>
    <td>{us.name}</td>
    <td>{us.age}</td>
    <td><button onClick={edit}>Edit</button><button onClick={()=>del(us.age)}>Delete</button></td>

   </tr>
    
  )
})}
</table>}
   

        

    </section>
  )
}

export default Show