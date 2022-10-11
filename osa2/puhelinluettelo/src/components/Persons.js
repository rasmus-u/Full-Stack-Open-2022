
const Persons = ({persons}) => {
  
  return (
    <>
      {persons.filter(person => person.show).map( person =>
          <p key={person.id}>{person.name} {person.number}</p>
      )}
    </>
  )
}

export default Persons