import { useEffect, useState } from "react";
import { TodoContext } from "./TodoContext";

const todoInicial = JSON.parse(localStorage.getItem("todos")) || [];

export const TodoProvider = ({children}) => {

    const [todos, setTodos] = useState(todoInicial);

    const agregarTodo = (item) => {
        const nuevoTodos = [...todos];
        nuevoTodos.push(item);
        setTodos(nuevoTodos);
    }

    const toggleTodo = (id) => {
        const nuevoTodos = [...todos];
        const todoExistente = nuevoTodos.find((todo) => todo.id === id);

        if (todoExistente) {
            todoExistente.completed = !todoExistente.completed;
        }
        setTodos(nuevoTodos);
    }

    const eliminarTodo = (id) => {
        const nuevoTodos = [...todos];
        const todosFiltrados = nuevoTodos.filter((todo) => todo.id !== id);
        setTodos(todosFiltrados);
    }

    const todosPendientes = () => {
        const todosFiltrados = todos.filter((todo) => !todo.completed);
        return todosFiltrados;
    }

    const todosCompletados = () => {
        const todosFiltrados = todos.filter((todo) => todo.completed);
        return todosFiltrados;
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return (
        // Context para usar estados y métodos globales en la aplicación
        <TodoContext.Provider value={ {
            agregarTodo,
            toggleTodo,
            eliminarTodo,
            todosPendientes,
            todosCompletados
        } }>
            {children}
        </TodoContext.Provider>
    )
}