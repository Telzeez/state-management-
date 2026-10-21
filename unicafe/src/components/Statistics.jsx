import { useCounters } from '../store.js'
const Statistics = () => {

  const counters = useCounters()
const total = counters.numOfGood * 1 + counters.numOfBad * -1 + counters.numOfNeutral * 0
  const all = counters.numOfGood  + counters.numOfBad + counters.numOfNeutral
  const average = (total/all) ? total/all : 0
  const positive = `${all ? (counters.numOfGood/all * 100) : 0} %` 
  
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <tr><td>good</td><td>{counters.numOfGood}</td></tr>
          <tr><td>neutral</td><td>{counters.numOfBad}</td></tr>
          <tr><td>bad</td><td>{counters.numOfNeutral}</td></tr>
          <tr><td>all</td><td>{all}</td></tr>
          <tr><td>average</td><td>{average}</td></tr>
          <tr><td>positive</td><td>{positive}</td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default Statistics
