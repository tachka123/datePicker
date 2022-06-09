import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import App from "./App";

const rootElement = document.getElementById("root");
if (!window.tapPluginInjected) {
  injectTapEventPlugin();
  window.tapPluginInjected = true;
}

ReactDOM.render(<App />, rootElement);
