

const Filter = ({newSearch, setSearch, persons, setPersons}) => {
  

  const filterList = (event) => {
    let a = event.target.value
    let b = [...persons]
    setSearch(a)
    b.forEach(person => {
      if (person.name.toLowerCase().includes(String(a).toLowerCase())) {
        person.show = true
        console.log(String(person.name), "shown")
      } else {
        person.show = false
      }
      })
    setPersons(b)
  }
  
  return(
    <div>
      filter shown with <input value={newSearch} onChange={filterList} />
    </div>
  )
}

export default Filter