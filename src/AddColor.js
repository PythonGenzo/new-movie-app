import { useState } from "react";
import { ColorBox } from './ColorBox';

export function AddColor() {
  // const color = "crimson";
  const [color, setColor] = useState();
  const [colorList, setColorList] = useState(["orange", "red", "skyblue"]);

  const style = {
    fontSize: "24px",
    backgroundColor: color,
  };
  return (
    <div>
      <div className="add-color">
        <input
          onChange={(event) => setColor(event.target.value)}
          style={style}
          type="text"
          placeholder="Enter a color"
          value={color} />
        <button
          onClick={() => setColorList([...colorList, color])}
        >
          Add Color
        </button>
        <ColorBox />
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>

  );
}
