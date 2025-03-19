import { useAppContext } from '../../context/app.provider';
import { useStyles } from './new.styles';

export const NewComponent = () => {
  const { root, value, data } = useStyles();
  const app = useAppContext()
  const s = app.newService.useState(['count', 'data']);

  return (
    <div className={root}>
      <div>NEW COMPONENT</div>
      <div className={value}>{s.count}</div>
      <pre className={data}>{JSON.stringify(s.data, null, ' ')}</pre>
    </div>
  );
};
