import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

const TodoItem = ({ todo }) => {
  const { updateTodo, deleteTodo, toggleComplete } = useTodo()
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const [isTodoEditable, setIsTodoEditable] = useState(false)

  const toggleTodo = () => {
    toggleComplete(todo.id)
  }

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg })
    setIsTodoEditable(false)
  }

  return (
    <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg shadow w-full">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleTodo}
        className="h-5 w-5 accent-blue-500"
      />

      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        className={`flex-1 px-3 py-2 rounded-md border ${
          isTodoEditable && !todo.completed
            ? 'bg-gray-700 border-gray-600 text-white'
            : 'bg-gray-900 border-transparent text-gray-400 cursor-not-allowed'
        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />

      <button
        onClick={() => {
          if (todo.completed) return
          if (isTodoEditable) {
            editTodo()
          } else {
            setIsTodoEditable((prev) => !prev)
          }
        }}
        className={`px-4 py-1 rounded text-sm font-medium transition ${
          isTodoEditable
            ? 'bg-green-600 text-white hover:bg-green-700'
            : 'bg-yellow-500 text-white hover:bg-yellow-600'
        }`}
      >
        {isTodoEditable ? 'Save' : 'Edit'}
      </button>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="px-4 py-1 bg-red-600 text-white rounded text-sm font-medium hover:bg-red-700 transition"
      >
        Delete
      </button>
    </div>
  )
}

export default TodoItem
