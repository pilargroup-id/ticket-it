import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function ButtonMobileMT({ onClickCreate }) {
  return (
    <Box sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000, '& > :not(style)': { m: 1 } }}>
      <Fab sx={{ backgroundColor: 'var(--accent-teal, #2a9d8f)', color: '#fff', '&:hover': { backgroundColor: 'var(--accent-teal-dark, #23857a)' } }} aria-label="add" onClick={onClickCreate}>
        <AddIcon />
      </Fab>
    </Box>
  );
}