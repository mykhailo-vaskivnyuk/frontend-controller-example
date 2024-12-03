import { app } from '../../services/app.provider';
import { useStyles } from './first.styles';

export const FirstComponent = () => {
  const { root } = useStyles();
  const s = app.firstService.useState(['status', 'inFirst', 'outFirst']);

  return (
    <div className={root}>
      <div>FIRST COMPONENT</div>
      <div>{s.status}</div>
      <div>{s.inFirst}</div>
      <div>{s.outFirst}</div>
      <button onClick={() => app.firstService.firstMethod()}>set inFirst</button>
    </div>
  );
}