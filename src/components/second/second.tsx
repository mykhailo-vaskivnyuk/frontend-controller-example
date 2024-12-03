import { app } from '../../services/app.provider';
import { useStyles } from './second.styles';

export const SecondComponent = () => {
  const { root } = useStyles();
  const { inSecond, outSecond, status } = app.secondService.useState(['inSecond', 'outSecond', 'status']);

  return (
    <div className={root}>
      <div>SECOND COMPONENT</div>
      <div>{status}</div>
      <div>{inSecond}</div>
      <div>{outSecond}</div>
      <button onClick={() => app.secondService.secondMethod()}>set inSecond</button>
    </div>
  );
}