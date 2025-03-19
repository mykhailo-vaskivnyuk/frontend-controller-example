import { app } from '../../context/app.provider';
import { useStyles } from './first.styles';

export const FirstComponent = () => {
  const { root, value } = useStyles();
  const s = app.firstService.useState(['status', 'inFirst', 'outFirst']);

  return (
    <div className={root}>
      <div>FIRST COMPONENT</div>
      <div>{s.status}</div>
      <div className={value}>{s.inFirst}</div>
      <div className={value}>{s.outFirst}</div>
      <button onClick={() => app.firstService.firstMethod()}>set inFirst</button>
    </div>
  );
};
