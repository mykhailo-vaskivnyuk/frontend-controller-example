import { useEffect, useState } from 'react';
import { app } from '../../context/app.provider';
import { ForthComponent } from '../forth/forth';
import { useStyles } from './third.styles';

export const ThirdComponent = () => {
  const { root, value } = useStyles();
  const { status, inThird, outThird } = app.thirdService.useState();

  const [addTwo, setAddTwo] = useState(true);
  useEffect(() => {
    setInterval(() => setAddTwo((v) => !v), 5000);
  }, []);

  return (
    <div className={root}>
      <div>
       <div>THIRD COMPONENT</div>
        <div>{status}</div>
        <div className={value}>{inThird}</div>
        <div className={value}>{outThird}</div>
      </div>
      <ForthComponent id='one' />
      {addTwo && <ForthComponent id='two' />}
    </div>
  );
};
