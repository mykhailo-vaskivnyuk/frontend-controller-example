import { FC, useEffect } from 'react';
import { useAppContext } from '../../context/app.provider';
import { useStyles } from './forth.styles';

export const ForthComponent: FC<{ id: string }> = ({ id }) => {
  const { root, value } = useStyles();
  const app = useAppContext();
  app.forth.useStore(id, { inForth: 0, outForth: 0 }, app);
  const forthService = app.forth.getStore(id)!;
  const { status, inForth, outForth } = forthService.useState(['status', 'inForth', 'outForth']);

  useEffect(() => {
    if (!forthService) return;

    forthService.subscribe(() => {
      app.thirdService.thirdMethod();
    }, ['inForth']);
    
    forthService.toDispose = app.thirdService.subscribe((state) => {
      forthService.forthMethodOut(state.outThird);
    }, ['outThird']);
  }, [app, forthService]);

  return (
    <div className={root}>
      <div>FORTH COMPONENT</div>
      <div>{status}</div>
      <div className={value}>{inForth}</div>
      <div className={value}>{outForth}</div>
      <button onClick={() => forthService.forthMethod()}>set inForth</button>
    </div>
  );
};
