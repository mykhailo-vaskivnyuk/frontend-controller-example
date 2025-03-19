import { useEffect } from "react";
import { useStyles } from "./app.styles"
import { useAppContext } from "../../context/app.provider";
import { FirstComponent } from "../first/first"
import { SecondComponent } from "../second/second";
import { ThirdComponent } from "../third/third";
import { NewComponent } from "../new/new";

export const App = () => {
  const { root } = useStyles();
  const app = useAppContext();
  const { status } = app.useState(['status']);

  useEffect(() => {
    app.init().catch((() => {}));
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
      <NewComponent />
    </div>
    );

};
