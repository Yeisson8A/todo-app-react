import { React, useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Add from "@mui/icons-material/Add";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { TodoContext } from "../context/TodoContext";

export const AddTodo = () => {
  const { agregarTodo } = useContext(TodoContext);
  const [tarea, setTarea] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (e) => setTarea(e.target.value);

  const createTodo = (e) => {
    e.preventDefault();
    agregarTodo({
      id: Math.random() * (100 - 1) + 1,
      title: tarea,
      completed: false
    });
    setTarea("");
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Container maxWidth="sm" style={{ marginTop: "30px" }}>
        <form onSubmit={createTodo}>
          <FormControl fullWidth={true}>
            <TextField
              onChange={handleChange}
              variant="standard"
              required={true}
              value={tarea}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: 5 }}
            >
              <Add />
              Crear tarea
            </Button>
          </FormControl>
        </form>
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          autoHideDuration={5000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            La tarea ha sido creada exitosamente
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
};
