import { useEffect } from "react";
import { useStyles } from "./app.styles"
import { useAppContext } from "../../services/app.provider";
// import { useApp } from "./services/useApp";
import { FirstComponent } from "../first/first"
import { SecondComponent } from "../second/second";
import { ThirdComponent } from "../third/third";

export const App = () => {
  const { root } = useStyles();
  const app = useAppContext();
  const { status } = app.useState(['status'])

  useEffect(() => {
    app.init();
  }, [app]);

  if (status !== 'READY') {
    return (
      <div className={root}>
        Loading ...
      </div>
    );
  }

  return (
    <div className={root}>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </div>
    );

};
