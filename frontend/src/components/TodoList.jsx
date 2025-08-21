import React from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'
const TodoList = ({todos,onDelete,onUpdateChecked,onUpdateTodo}) => {
  return (
    <div className='TodoList'>
        <h4>Todo List 🌱</h4>
        <input type="text" placeholder='검색어를 입력하세요' />
        <div className="todos-wrapper">
          {todos.map((todo,i)=>(

            <TodoItem 
            key={i} 
            todo={todo}
            onUpdateChecked={onUpdateChecked} 
            onUpdateTodo={onUpdateTodo}
            onDelete={onDelete}/>
          ))}
        
        </div>
    </div>
  )
}

export default TodoList