import React, { useState } from "react";
import Button from "./button/button";

function App() {
  const [size, setSize] = useState("block")
  const [color, setColor] = useState("primary")
  const [icon, setIcon] = useState("")
  const [disabled, setDisabled] = useState(false)
  return (
    <div >
      <Button color={color} size={size} icon={icon} disabled={disabled} />
      <br />
      <form className="myForm">
        <select onChange={newSize => { setSize(newSize.target.value) }}>
          <option value="block">block</option>
          <option value="large">large</option>
          <option value="small">small</option>
        </select>
        <select onChange={newIcon => { setIcon(newIcon.target.value) }}>
          <option value="">no icon</option>
          <option value="left_chat">left</option>
          <option value="center_chat">center</option>
          <option value="right_arrow">right</option>
        </select>
        <select onChange={newColor => { setColor(newColor.target.value) }}>
          <option value="primary">primary</option>
          <option value="secondary">secondary</option>
          <option value="outline">outline</option>
          <option value="transparent">transparent</option>
        </select>
        <select onChange={newDisabled => { setDisabled(newDisabled.target.value) }}>
          <option value={false}>no disable</option>
          <option value={true}>disable</option>
        </select>
      </form>
    </div>

  );
}

export default App;