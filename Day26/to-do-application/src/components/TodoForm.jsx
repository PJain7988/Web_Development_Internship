import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

const TodoForm = () => {
  const { addTodo } = useTodo()
  const [todo, setTodo] = useState("")

  const add = (e) => {
    e.preventDefault()
    if (!todo.trim()) return
    addTodo({ todo, completed: false })
    setTodo("")
  }

  return (
    <form
      onSubmit={add}
      className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-lg w-full"
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter your todo..."
        className="flex-1 px-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm
