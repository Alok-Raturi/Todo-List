import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FaEdit } from 'react-icons/fa';

export default function FormDialog({onEdit,item}) {
  const [open, setOpen] = React.useState(false);
    const [task, setTask] = React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <FaEdit/>
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Edit your Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Edit"
            type="email"
            fullWidth
                      variant="standard"
                      onChange={(e)=>setTask(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={() => { 
                      if(task.length>0)
                      onEdit(item.id, task);
                      handleClose()
                  }
                  } >Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
