import React from "react";
//Importera todo komponenten
import Todo from "./Todo";

//Komponenten Todolist
//Vi skickar med todos från app.js som egenskap och gör ngt med den
//Loopa igenom alla todos och returnera en Todo-komponent
export default function TodoList({ todos, toggleTodo }) {
  return (
      todos.map(todo => {
        return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    })
  )
}
//key = {todo} är för att react ska veta vilka element som ska rendereras(inte alla)