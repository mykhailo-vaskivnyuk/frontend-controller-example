import { app } from '../../context/app.provider';
import { useStyles } from './second.styles';

export const SecondComponent = () => {
  const { root, value } = useStyles();
  const { inSecond, outSecond, status } = app.secondService.useState(['inSecond', 'outSecond', 'status']);

  return (
    <div className={root}>
      <div>SECOND COMPONENT</div>
      <div>{status}</div>
      <div className={value}>{inSecond}</div>
      <div className={value}>{outSecond}</div>
      <button onClick={() => app.secondService.secondMethod()}>set inSecond</button>
    </div>
  );
};
