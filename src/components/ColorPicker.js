import React, { useState } from "react";
import '../colorPicker.css'

const colorNames = [
  "Aquamarine", "BlueViolet", "Chartreuse", "CornflowerBlue", "Thistle", "SpringGreen", "SaddleBrown", "PapayaWhip","MistyRose",
];

const ColorPicker = () => {
  const [color, setColor] = useState();

  const divStyle = { backgroundColor: color };

  return (
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName) => (
        <button onClick={() => setColor(colorName)} key={colorName}>
          {colorName}
        </button>
      ))}
    </div>
  );
};

export default ColorPicker;
