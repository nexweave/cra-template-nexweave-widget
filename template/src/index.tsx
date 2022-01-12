import React from "react";
import ReactDOM from "react-dom";
import { EditoWithContextProvider } from "./libs/components/mockEditor";
import { widgetData } from "./widget/mockData";
import reportWebVitals from "./reportWebVitals";
import { schema } from "./widget/schema";

ReactDOM.render(
  <React.StrictMode>
    <EditoWithContextProvider
      videoUrl="https://nexweave-storage.s3.ap-south-1.amazonaws.com/nexweave-wdk/sample.mp4"
      formSchema={schema}
      initialFormState={widgetData}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
