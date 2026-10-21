import { useControls } from '../store.js'

const Buttons = () => {
  const actions = useControls()
  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={actions.increGood}>good</button>
      <button onClick={actions.increBad}>neutral</button>
      <button onClick={actions.increNeutral}>bad</button>
    </div>
  )
}

export default Buttons

