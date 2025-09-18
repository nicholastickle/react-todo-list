
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box } from '@mui/material';


const initialTodos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a to-do app', completed: false },
    { id: 3, text: 'Profit!', completed: false },
];

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) return [];
    return data;
};

export default function TodoList() {

    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const removeTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    const toggleComplete = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    const addTodo = (text) => {
        setTodos((prevTodos) => {
            return [
                ...prevTodos,
                {
                    text: text,
                    // id: crypto.randomUUID(),
                    id: crypto.randomUUID(),
                    completed: false
                },
            ];
        });
    };

    return (
        <div>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                m: 3,



            }}>
                <h1>Simple to-do list</h1>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {todos.map((todos) => {
                        return <TodoItem todos={todos} key={todos.id} remove={removeTodo} toggle={toggleComplete} />
                    })}
                </List>
                <TodoForm addTodo={addTodo} />
            </Box>
        </div>
    );
}