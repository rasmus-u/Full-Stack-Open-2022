
const PersonForm = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons}) => {
  
  const changeName = (event) => {
    setNewName(event.target.value)
  }

  const changeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const value = 
      { name: newName,
        number: newNumber,
        id: persons.length + 1,
        show: true
      }
    persons.every(person => person.name != value.name
      ? setPersons(persons.concat(value))
      : alert(`${newName} is already added to phonebook`))
      
    setNewName('')
    setNewNumber('')
  }

  return(
    <form>
      <div>
        name: <input value={newName} onChange={changeName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={changeNumber} />
      </div>
      <div>
        <button onClick={addPerson} type="submit">add</button>
      </div>
    </form> 
  )
}

export default PersonForm