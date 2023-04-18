import React, { useState } from "react"


const Form = () => {

  const [newItem, setNewItem] = useState("")



  return(
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul>
          <li>
            <label>
              <input type="checkbox" />
              Item 1
            </label>
            <button className="btn btn-danger">Delete</button>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Item 2
            </label>
            <button className="btn btn-danger">Delete</button>
          </li>
      </ul>
    </>
  )
}

export default Form;