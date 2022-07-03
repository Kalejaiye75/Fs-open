import React from "react";

import { useState } from 'react';

const PhoneBook = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [number, setNewNumber] = useState('')
  
  
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: number,
      id:persons.length+1
   
    }

    
    
    persons.find((p)=>p.name===newName)
    ? setPersons(persons, alert("Name is already added")) 
    : setPersons(persons.concat(nameObject))
    
    // ? alert(`${newName} is added to phonebook`)
    // : "";
    
    // const searchName = check ? setPersons(persons, alert("Name is already added")) : setPersons(persons.concat(nameObject))
   
    
    // console.log(check)

    // setPersons(persons.concat(nameObject))
    // console.log("this button is clicked", event.target)
    
  }
  
  
  const HandleNewNote = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
   
  const HandleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  
   const handleSearchName = (e) => {
    setPersons(persons.filter(person => person.name.includes(e.target.value)))
    
   }

  const Phonebook = () => {
    
   return (
    <div>
        <h2>Phonebook</h2>
        <div>filter shown with <input onChange={handleSearchName}/></div>
    </div>
    
   )
  }
  const Names = () => {
    return (
      <div>
        <h2>add a new</h2>
        <form onSubmit={addName}>
          <div>
          name: <input value={newName} onChange={HandleNewNote} />
          </div>
          <div>
          number: <input value={number} onChange={HandleNewNumber} />
          </div>
          <div>
          <button type="submit">add</button>
          </div>
        </form>
      </div>
    )
  }

  const Numbers = () => 
    <div>
      <h2>Numbers</h2>
      <p>
        {persons.map((name, nameIndex) => (<p key={`persons${nameIndex}`} > {name.name} {name.number}</p>))}
      </p>
    </div>
  return (
    <div>
      <Phonebook />
      <Names />
      <Numbers />
         {/* {number.map((number, numberIndex) => (<div key={`number${numberIndex}`} > {number.name}</div>))} */}
    </div>
  )

}

export default PhoneBook;