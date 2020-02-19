import React, { useState, useRef, useEffect } from "react";
//Importera todolist komponenten
import TodoList from "./TodoList";
//Importera random ids
import uuidv4 from "uuid/v4";

const LOCAL_STORAGE_KEY = "todoApp.todos";

//Komponenten App
function App() {
  //todos är varje specifik 'todo' inne i 'todostate'. I dno
  //setTodos är funktionen som kallas för att uppdatera todos.
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  //En för att loada todos från localstorage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  //en hook-metod för att spara till localstorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  //En funktion för att toggla todo
  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  //En funktion som hanterar 'add' som tar in ett event
  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    //Anropa funktionen setTodos
    setTodos(prevTodos => {
      return [
        ...prevTodos,
        {
          id: uuidv4(),
          name: name,
          complete: false
        }
      ];
    });
    console.log(name);
    todoNameRef.current.value = null;
  }

  //en funktion som tar filtrerar bort dem som är klara
  function handleClearTodos(e) {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  //Varje komponent har "props", alltså egenskaper.
  //Dessa skickas med som man skickar attribut till ett html element
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed Todos</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
