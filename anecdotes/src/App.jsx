
import CreateAnecdote from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
const App = () => {
  // const vote = (id) => {
  //   const voteAction  = useAnecdotesActions()
    
  // }
 

  return (
    <div>
      <h2>Anecdotes</h2>
    <AnecdoteList/>
      <CreateAnecdote/>
    </div>
  )
}

export default App
