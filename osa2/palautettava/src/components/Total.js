const Total = ({course}) => {
  
    const getSum = (total, num) => {
      return total + num.exercises
    }
  
    return(
      <p>total of {course.parts.reduce(getSum, 0)} exercises</p>
    )
  }

export default Total