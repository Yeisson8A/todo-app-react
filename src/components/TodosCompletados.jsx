import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todo } from "./Todo";
import { Typography } from "@mui/material";

export const TodosCompletados = () => {
  const { todosCompletados, toggleTodo, eliminarTodo } = useContext(TodoContext);

  return (
    <div>
      {todosCompletados().length > 0 && (
        <Typography variant="h4" component="h2" align="center">
          Completados: {todosCompletados().length}
        </Typography>
      )}

      {todosCompletados().map((todo) => (
        <Todo
          todo={todo}
          toggleTodo={toggleTodo}
          eliminarTodo={eliminarTodo}
          key={todo.id}
        />
      ))}
    </div>
  );
};
