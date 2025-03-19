import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    background: '#55bb55',
    display: 'flex',
    flexDirection: 'column',
  },
  value: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
}, { name: 'Second' });
