import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { IconButton } from "@mui/material";
import { Check, Delete } from "@mui/icons-material";

export const Todo = ({ todo, toggleTodo, eliminarTodo }) => {

  const cambiarEstadoTodo = () => {
    toggleTodo(todo.id);
  };

  const handleEliminarTodo = () => {
    eliminarTodo(todo.id);
  };

  return (
    <Container>
      <Card
        className="root"
        variant="outlined"
        style={{ marginTop: 35, background: "#bbdefb" }}
      >
        <CardContent>
          <Typography variant="h5" component="h2" style={{ cursor: "pointer", textDecoration: todo.completed ? "line-through" : "" }}>
            <IconButton onClick={cambiarEstadoTodo}>
              <Check style={{ color: "green" }} />
            </IconButton>
            {todo.title}
            <IconButton onClick={handleEliminarTodo} style={{ float: "right" }}>
              <Delete style={{ color: "red" }} />
            </IconButton>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
