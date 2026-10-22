
import React from 'react'
import { useAnecdotesActions } from '../store.js'


const CreateAnecdote = () => {
    const { add } = useAnecdotesActions()
     const generateId = () => Number(Math.random() * 10000000).toFixed(0)
  const handleCreate =(e) => {

  e.preventDefault()
  
  const content = e.target.anecdote.value
  if(!content) return;
  console.log(content)
add({content, id: generateId(), vote: 0})
e.target.reset()
  }
  return (
    <div>
<h2>create new</h2>
      <form onSubmit={handleCreate}>
        <div>
          <input data-testid="new" name="anecdote"/>
        </div>
        <button>create</button>
      </form>
    </div>
  
  )
}

export default CreateAnecdote