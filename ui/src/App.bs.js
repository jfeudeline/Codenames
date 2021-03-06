// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Board from "./Board";
import * as Home$Ui from "./Home.bs.js";
import * as PageNotExist$Ui from "./PageNotExist.bs.js";
import * as ReasonReactRouter from "reason-react/src/ReasonReactRouter.js";

var make = Board.default;

var Board$1 = {
  make: make
};

function App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  var pageToGo = match ? (
      match[1] ? React.createElement(PageNotExist$Ui.make, { }) : React.createElement(React.Fragment, undefined, React.createElement(make, {
                  gameName: match[0]
                }))
    ) : React.createElement(Home$Ui.make, { });
  return React.createElement("div", undefined, React.createElement("nav", undefined, React.createElement("h1", undefined, "Codenames")), pageToGo);
}

var make$1 = App;

var $$default = App;

export {
  Board$1 as Board,
  make$1 as make,
  $$default ,
  $$default as default,
  
}
/* make Not a pure module */
