import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    background: '#bb5555',
    display: 'flex',
    flexDirection: 'column',
  },
  value: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
}, { name: 'First' });
