import React from 'react'

//Komponenten Todo som ska returnera element av alla todos.
//Skriv ut specifika todo
export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}></input>
            {todo.name}
            </label>
            
        </div>
    )
}
