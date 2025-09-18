import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';


export default function TodoFrom({ addTodo }) {
    const [text, setText] = useState("");

    const handleChange = (evt) => {
        setText(evt.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        // console.log(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box

                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >

                <TextField id="standard-basic" label="New to-do..." variant="standard"
                    value={text}
                    onChange={handleChange}
                    slotProps={{
                        input: {
                            endAdornment: < InputAdornment position="end" >
                                <IconButton
                                    aria-label={"Create new to-do"}
                                    edge="end"
                                    onClick={handleSubmit}
                                >
                                    <AddIcon />
                                </IconButton>
                            </InputAdornment>
                        },
                    }}
                />

            </Box >
        </form>

    );
}