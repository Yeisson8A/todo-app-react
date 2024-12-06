import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todo } from "./Todo";
import { Typography } from "@mui/material";

export const TodosPendientes = () => {
  const { todosPendientes, toggleTodo, eliminarTodo } = useContext(TodoContext);

  return (
    <div>
      {todosPendientes().length > 0 && (
        <Typography variant="h4" component="h2" align="center">
          Pendientes: {todosPendientes().length}
        </Typography>
      )}

      {todosPendientes().map((todo) => (
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
