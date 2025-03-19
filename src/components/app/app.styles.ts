import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  '@global': {
    'body': {
      background: 'black',
    },
  },
  root: {
    maxWidth: 1000,
    margin: 20,
    padding: 20,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 20,
    background: '#aaaaaa',
    fontFamily: 'Tahoma',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#222222',
    '& > div': {
      minHeight: 200,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    },
    '& button': {
      fontSize: 20,
      background: '#aaaaaa',
    },
  }
}, { name: 'App' });
