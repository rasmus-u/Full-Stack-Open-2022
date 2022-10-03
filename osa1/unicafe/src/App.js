import { useState } from 'react'

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr> 
)

const Statistics = ({items}) => {
  const all = () => (items.good + items.neutral + items.bad)
  const toAverage = () => (1*items.good+0*items.neutral-1*items.bad)/all()
  const positiveAmount = () => (100 * items.good / all())+" %"
  
  if (all() != 0) {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <StatisticLine text="good" value={items.good} />
          <StatisticLine text="neutral" value={items.neutral} />
          <StatisticLine text="bad" value={items.bad} />
          <StatisticLine text="all" value={all()} />
          <StatisticLine text="average" value={toAverage()} />
          <StatisticLine text="positive" value={positiveAmount()} />
        </table>
      </div>
    )
    } else {
      return <p>No feedback given</p>
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const items = {
    good: good,
    neutral: neutral,
    bad: bad
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <Statistics items={items} />
    </div>
  )
}

export default App
