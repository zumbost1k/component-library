
import React from "react";
import Buttons from "./buttons/buttons";

function App() {
  return (
    <div >
      <Buttons color={"secondary"} size={"small"} icon={"right_arrow"} disabled={true} />
      <br />
      <Buttons color={"primary"} size={"block"} icon={"center_chat"} disabled={true} />
      <br />
      <Buttons color={"outline"} size={"large"} icon={"left_chat"} disabled={true} />
      <br />
      <Buttons color={"transparent"} size={"small"} icon={"left_chat"} disabled={true} />
    </div>
  );
}

export default App;