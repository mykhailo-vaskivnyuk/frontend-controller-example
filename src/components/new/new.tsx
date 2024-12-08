import { app } from '../../services/app.provider';
import { useStyles } from './new.styles';

export const NewComponent = () => {
  const { root } = useStyles();
  const s = app.newService.useState(['data', 'count']);

  return (
    <div className={root}>
      <div>NEW COMPONENT</div>
      <div>{s.count}</div>
      <pre>{JSON.stringify(s.data, null, ' ')}</pre>
    </div>
  );
};
