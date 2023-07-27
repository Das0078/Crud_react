import React from 'react'

const Add = ({submit}) => {
  return (
    <>
    <form action="" onSubmit={submit}>
      name: <input type="text" name="name" />
      age: <input type="number" name="age" />
      <button >Submit</button>
     </form>
    </>
  )
}

export default Add