import React from 'react'
import { useAnecdotesActions, useAnecdotes } from '../store'
const AnecdoteList = () => {
      const anecdotes = useAnecdotes()
const { voteFn } = useAnecdotesActions()
  return (
    <div>
       {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteFn(anecdote.id)}>vote</button>
          </div>
        </div>
      ))} 
    </div>
     
  )
}

export default AnecdoteList