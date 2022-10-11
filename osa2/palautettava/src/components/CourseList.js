import Course from './Course'

const CourseList = ({courses}) => {
    return (
        <ul>
            {courses.map(course => 
                <Course key={course.id} course={course} />
            )}
        </ul>
    )
}

export default CourseList