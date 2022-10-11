import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const[newSearch, setSearch] = useState('')
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        newSearch={newSearch} 
        setSearch={setSearch}
        persons={persons} 
        setPersons={setPersons}
      />

      <h3>add a new</h3>
      <PersonForm 
        newName={newName} 
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons} 
      />

      <h2>Numbers</h2>
      <Persons persons={persons} />
      
    </div>
  )

}

export default App