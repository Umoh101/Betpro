import "antd/dist/antd.css";
import "./App.css";
import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {LoadingOutlined} from "@ant-design/icons";
import Error1 from "./fileContent/Error1";

function App() {
  const Entry = lazy(() => import("./fileContent/Home/Entry"));
  const FormPage = lazy(() => import("./fileContent/FormPage/FormPage"));
  const Entry1 = lazy(() => import("./fileContent/Search/Entry1"));

  return (
    <Suspense
      fallback={
        <div className="image1_content">
          <div className="color_background">
            <LoadingOutlined />
          </div>
        </div>
      }
    >
      <Router>
        <Switch>
          <Route path="/" exact component={Entry} />

          <Route path="/Form" exact component={FormPage} />

          <Route path="/Check" exact component={Entry1} />

          <Route component={Error1} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
