import { AddTodo } from "./components/AddTodo";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { TodoList } from "./components/TodoList";
import { TodoProvider } from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ToDo App
            </Typography>
          </Toolbar>
        </AppBar>
        <AddTodo />
        <TodoList />
      </Box>
    </TodoProvider>
  );
}

export default App;
