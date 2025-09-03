import React from 'react'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

const App = () => {
  const [todos, setTodos] = React.useState([]); // Initial state
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
    // prev -> to access prev value
    // date.now() -> to generate date string
    // ...todo -> spread todo
    // ...prev -> spread prev todo
  }
  const deleteTodo = (id) => {
    // each is object in array
    setTodos((prev) => prev.filter((each) => each.id !== id));
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((each) => EncodedAudioChunk.id === id ? todo : each));
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((each) => each.id === id ? { ...each, completed: !each.completed } : each))
  }
  // console.log(todos,'-----------------------------------------')
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4">
      <h1 className="text-3xl font-bold text-center pt-10">Todo List</h1>
      <div className="w-full max-w-xl mx-auto mt-6">
      <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
        <TodoForm />
        <div>
          {todos.map((each) => (
            <TodoItem todo={each} key={each.id} />
          ))}
        </div>
      </TodoProvider>
    </div>
    </div>
  )
}

export default App;
