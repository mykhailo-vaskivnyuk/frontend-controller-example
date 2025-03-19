import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    height: 250,
    background: '#bb5555',
    display: 'flex',
    flexDirection: 'column',
    gridColumnStart: 1,
    gridColumnEnd: 3,
  },
  value: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  data: {
    color: 'white',
  },
}, { name: 'New' });
