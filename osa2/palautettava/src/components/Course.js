import Part from './Part'
import Total from './Total'

const Course = ({course}) => {
    return (
      <li>
        <div>
          <h2>{course.name}</h2>
          <ul>
            {course.parts.map( item =>
              <Part key={item.id} part={item} />
            )}
          </ul>
          <Total course={course} />
        </div>
      </li>
    )
  }

export default Course