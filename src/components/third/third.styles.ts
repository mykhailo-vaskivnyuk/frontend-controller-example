import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    background: '#cc6644',
    gridColumnStart: 1,
    gridColumnEnd: 3,
    padding: 10,
    display: 'grid',
    gridTemplateColumns: 'calc(50% - 0px) 1fr 1fr',
    gap: 20,
    '& > div': {
      minHeight: 200,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 10,
    },
  },
  value: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
}, { name: 'Third' });
