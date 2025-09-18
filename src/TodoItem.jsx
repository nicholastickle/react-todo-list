
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export default function TodoItem({ todos, remove, toggle }) {

    const labelId = `checkbox-list-label-${todos.id}`;
    const removeTodo = () => {
        remove(todos.id);
    }
    const toggleComplete = () => {
        toggle(todos.id);
    }


    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="comments">
                    <DeleteIcon onClick={removeTodo} />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todos.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        onChange={toggleComplete}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todos.text} />
            </ListItemButton>
        </ListItem>
    )

}

