import React from 'react'

const Show = ({user}) => {

  return (
    <section>
    
<h1>Users</h1>
  {<table border="1px">
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
{user.map(us=>{
  return(
 
   <tr>
    <td>{us.name}</td>
    <td>{us.age}</td>
   </tr>
    
  )
})}
</table>}
   

        

    </section>
  )
}

export default Show